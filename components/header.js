import styled from "styled-components";
import Link from "next/link";

export default function Header({ path }) {
  return (
    <Container
      style={path === "/" ? { backgroundColor: "rgba(0, 0, 0, 0)" } : {}}
    >
      <Link href="/" passHref>
        <a>home</a>
      </Link>
      <Link href="/information" passHref>
        <a>info</a>
      </Link>
      <Link href="/" passHref>
        <Logo>cameron & nicole</Logo>
      </Link>
      <Link href="/gallery" passHref>
        <a>gallery</a>
      </Link>
      <Link href="/registry" passHref>
        <a>registry</a>
      </Link>
    </Container>
  );
}

const Container = styled.header`
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

  @media (max-width: 925px) {
    padding-right: 50px;
    padding-left: 50px;
  }

  a {
    font-size: 18px;

    @media (max-width: 799px) {
      display: none;
    }
  }
`;

const Logo = styled.div`
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;
