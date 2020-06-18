import styled from "styled-components";
import Link from "next/link";

import Layout from "../components/layout";

export default function Success() {
  return (
    <Layout>
      <Content>
        <h1>Thank you for your donation!</h1>
        <Link href="/" passHref>
          <Button>return to home</Button>
        </Link>
      </Content>
    </Layout>
  );
}

const Content = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 50px;
    text-align: center;
    font-size: 55px;
  }
`;

const Button = styled.button`
  height: 50px;
  width: 200px;
  font-size: 18px;
`;
