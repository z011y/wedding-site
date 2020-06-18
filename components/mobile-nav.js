import Link from "next/link";
import styled from "styled-components";

const MobileNav = () => {
  return (
    <NavContainer>
      <Link href="/" passHref>
        <NavLink>home</NavLink>
      </Link>
      <Link href="/information" passHref>
        <NavLink>info</NavLink>
      </Link>
      <Link href="/gallery" passHref>
        <NavLink>gallery</NavLink>
      </Link>
      <Link href="/registry" passHref>
        <NavLink>registry</NavLink>
      </Link>
    </NavContainer>
  );
};

export default MobileNav;

const NavContainer = styled.div`
  height: 100%;
  width: 200px;
  background-color: white;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
  transition: 0.25s ease-in-out;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 100px;
`;

const NavLink = styled.a`
  color: black;
  font-size: 18px;
  padding: 10px;
`;
