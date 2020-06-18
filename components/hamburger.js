import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";

import MobileNav from "./mobile-nav";

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Menu onClick={() => setOpen(!open)}>
        {open ? <img src="/close.svg" /> : <img src="/menu.svg" />}
      </Menu>
      {open ? <MobileNav /> : null}
    </>
  );
};

export default Hamburger;

const Menu = styled.a`
  width: 25px;
  height: 25px;
  position: fixed;
  top: 12.5px;
  right: 12.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  @media (min-width: 800px) {
    display: none;
  }
`;
