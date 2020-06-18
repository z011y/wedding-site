import styled from "styled-components";
import Link from "next/link";

import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Content>
        <Text>
          <h1>join us August 15th</h1>
          <Link href="/information" passHref>
            <a>see more information</a>
          </Link>
        </Text>
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
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px;
  width: 100%;
  height: 300px;
  position: absolute;
  bottom: 0;
  right: 0;

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 50px;
    height: 200px;
  }

  h1 {
    color: white;
    font-size: 36px;

    @media (max-width: 925px) {
      font-size: 24px;
    }
  }

  a {
    color: white;
    font-size: 36px;

    @media (max-width: 925px) {
      font-size: 24px;
    }
  }
`;
