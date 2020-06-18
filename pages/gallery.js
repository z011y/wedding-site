import styled from "styled-components";
import { useState } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";

import Layout from "../components/layout";
import Image from "../components/image";

export default function Gallery() {
  const [active, setActive] = useState(undefined);

  const images = [
    {
      index: 0,
      img: "/photo1.jpeg",
    },
    {
      index: 1,
      img: "/photo2.jpeg",
    },
    {
      index: 2,
      img: "/photo3.jpeg",
    },
    {
      index: 3,
      img: "/photo4.jpeg",
    },
    {
      index: 4,
      img: "/photo5.jpeg",
    },
    {
      index: 5,
      img: "/photo6.jpeg",
    },
    {
      index: 6,
      img: "/photo7.jpeg",
    },
    {
      index: 7,
      img: "/photo8.jpeg",
    },
    {
      index: 8,
      img: "/photo9.jpeg",
    },
    {
      index: 9,
      img: "/photo10.jpeg",
    },
    {
      index: 10,
      img: "/photo11.jpeg",
    },
    {
      index: 11,
      img: "/photo12.jpeg",
    },
    {
      index: 12,
      img: "/photo13.jpeg",
    },
    {
      index: 13,
      img: "/photo14.jpeg",
    },
    {
      index: 14,
      img: "/photo15.jpeg",
    },
    {
      index: 15,
      img: "/photo16.jpeg",
    },
    {
      index: 16,
      img: "/photo17.jpeg",
    },
    {
      index: 17,
      img: "/photo18.jpeg",
    },
  ];

  const right = () => {
    if (active !== undefined && active >= 0) {
      setActive(active + 1);
    }
  };

  const left = () => {
    if (active !== undefined && active >= 0) {
      setActive(active - 1);
    }
  };

  const close = () => {
    if (active !== undefined) {
      setActive(undefined);
    }
  };

  const renderImages = () => {
    return images.map((image) => {
      return (
        <Image
          index={image.index}
          img={image.img}
          onClick={() => setActive(image.index)}
          active={active === image.index}
          right={right}
          left={left}
          close={close}
          onLoad={() => setLoaded(true)}
        />
      );
    });
  };

  return (
    <Layout>
      <Content>
        <h1>gallery</h1>

        <KeyboardEventHandler handleKeys={["right"]} onKeyEvent={right} />
        <KeyboardEventHandler handleKeys={["left"]} onKeyEvent={left} />
        <KeyboardEventHandler handleKeys={["esc"]} onKeyEvent={close} />

        <GridContainer>{renderImages()}</GridContainer>
      </Content>
    </Layout>
  );
}

const Content = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  padding: 100px;

  h1 {
    margin-bottom: 50px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 3rem;
`;

const Placeholder = styled.div`
  width: 100%;
  height: 300px;
  background-color: grey;
`;
