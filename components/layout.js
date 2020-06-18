import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

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
      {router.pathname === "/" ? (
        <HeaderTop>
          <Link href="/" passHref>
            <a>home</a>
          </Link>
          <Link href="/information" passHref>
            <a>info</a>
          </Link>
          <Logo>cameron & nicole</Logo>
          <Link href="/gallery" passHref>
            <a>gallery</a>
          </Link>
          <Link href="/registry" passHref>
            <a>registry</a>
          </Link>
        </HeaderTop>
      ) : (
        <Header>
          <Link href="/" passHref>
            <a>home</a>
          </Link>
          <Link href="/information" passHref>
            <a>info</a>
          </Link>
          <Logo>cameron & nicole</Logo>
          <Link href="/gallery" passHref>
            <a>gallery</a>
          </Link>
          <Link href="/registry" passHref>
            <a>registry</a>
          </Link>
        </Header>
      )}
      <main>{children}</main>
    </div>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 100px;
  padding-left: 100px;
  width: 100%;
  height: 50px;
  background-color: white;
  position: fixed;
  z-index: 100;

  a {
    font-size: 18px;
  }
`;

const HeaderTop = styled(Header)`
  background-color: rgba(270, 270, 270, 0);
`;

const Logo = styled.div`
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
