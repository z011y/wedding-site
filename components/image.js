import styled from "styled-components";
import { useState } from "react";

export default function Image({
  index,
  img,
  active,
  onClick,
  close,
  right,
  left,
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Img
        onClick={onClick}
        style={!loaded ? { display: "none" } : { display: "flex" }}
      >
        <img src={img} alt="" onLoad={() => setLoaded(true)} />
      </Img>

      {!loaded ? (
        <Img
          style={{
            backgroundColor: "rgba(242, 242, 242, 1)",
          }}
        />
      ) : null}

      {active ? (
        <FullImg style={{ backgroundImage: `url(${img})` }}>
          <Close src="/close.svg" onClick={close} />
          <Right src="/right.svg" onClick={right} />
          <Left src="/left.svg" onClick={left} />
        </FullImg>
      ) : null}
    </>
  );
}

const FullImg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 100;
  background-color: white;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Img = styled.div`
  width: 100%;
  height: 300px;
  transition: 0.25s ease-in-out;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  img {
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
  }
`;

const Close = styled.img`
  font-size: 12px;
  position: fixed;
  top: 50px;
  right: 50px;
  background-color: white;
  padding: 10px;
  border-radius: 50px;
  height: 40px;
  width: 40px;

  &:hover {
    cursor: pointer;
  }
`;

const Right = styled.img`
  font-size: 12px;
  position: fixed;
  top: 50%;
  right: 50px;
  background-color: white;
  padding: 10px;
  border-radius: 50px;
  height: 40px;
  width: 40px;

  &:hover {
    cursor: pointer;
  }
`;

const Left = styled.img`
  font-size: 12px;
  position: fixed;
  top: 50%;
  left: 50px;
  background-color: white;
  padding: 10px;
  border-radius: 50px;
  height: 40px;
  width: 40px;

  &:hover {
    cursor: pointer;
  }
`;
