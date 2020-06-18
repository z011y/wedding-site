import styled from "styled-components";
import Link from "next/link";

import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Content>
        <h1>join us August 15th</h1>
        <Link href="/information" passHref>
          <a>see more information</a>
        </Link>
      </Content>
    </Layout>
  );
}

const Content = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url("/home.png");
  background-size: cover;
  background-position: center;

  h1 {
    color: white;
    position: absolute;
    bottom: 100px;
    left: 100px;
    font-size: 36px;
  }

  a {
    color: white;
    position: absolute;
    bottom: 100px;
    right: 100px;
    font-size: 36px;
  }
`;
