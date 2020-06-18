import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import Hamburger from "./hamburger";
import Header from "./header";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className="container">
      <Head>
        <title>Cameron & Nicole</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        ></link>
        <script src="https://www.paypal.com/sdk/js?client-id=SB_CLIENT_ID"></script>
      </Head>

      {router.pathname === "/" ? <Header path="/" /> : <Header path="/any" />}
      <Hamburger />
      <main>{children}</main>
    </div>
  );
}
