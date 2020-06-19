import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import NumberFormat from "react-number-format";
import Stripe from "../components/stripe";

export default function Payment({ active, onClick, close }) {
  const [content, setContent] = useState("home");
  const [value, setValue] = useState(null);
  const [price, setPrice] = useState(null);
  const [status, setStatus] = useState("continue");

  const handlePayment = (details, data) => {
    console.log(details, data);
  };

  const handleClick = async () => {
    setStatus("calculating...");
    const res = await fetch("/api/create-price", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: value }),
    });
    const json = await res.json();
    setPrice(json.price);
    setContent("confirm");
    setStatus("continue");
  };

  const node = useRef();

  const handleModalClose = (e) => {
    if (node.current.contains(e.target)) {
      return;
    } else {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleModalClose, false);

    return function cleanup() {
      document.removeEventListener("mousedown", handleModalClose, false);
    };
  });

  return (
    <Container>
      <Modal ref={node}>
        <Close src="/close.svg" onClick={close} />

        {content !== "home" ? (
          <Back src="left.svg" onClick={() => setContent("home")} />
        ) : null}

        {content === "home" ? (
          <Wrapper>
            <h2>How much would you like to donate?</h2>
            <InputWrapper>
              <span>$</span>
              <NumberFormat
                thousandSeparator={true}
                decimalScale={2}
                fixedDecimalScale={true}
                allowNegative={false}
                allowLeadingZeros={false}
                onValueChange={(values) =>
                  setValue(values.value.replace(/,/g, "").replace(/\./g, ""))
                }
                placeholder="0.00"
              />
            </InputWrapper>
            <Button
              style={
                value === null ||
                value === "" ||
                value / 100 === 0 ||
                value / 100 > 999999
                  ? {
                      backgroundColor: "grey",
                      border: "5px solid grey",
                    }
                  : {}
              }
              onClick={handleClick}
              disabled={
                value === null ||
                value === "" ||
                value / 100 === 0 ||
                value / 100 > 999999
                  ? true
                  : false
              }
            >
              {status}
            </Button>
          </Wrapper>
        ) : null}

        {content === "confirm" ? (
          <Wrapper>
            <h2>
              You are about to donate{" "}
              <span style={{ fontFamily: "system-ui", fontWeight: "700" }}>
                $
                {(value / 100)
                  .toString()
                  .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,")}
                .00
              </span>
              <br />
              Click the button below to continue.
            </h2>
            <Stripe amount={value} price={price}>
              Continue
            </Stripe>
          </Wrapper>
        ) : null}
      </Modal>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Close = styled.img`
  font-size: 12px;
  top: 40px;
  right: 50px;
  position: absolute;
  background-color: white;
  border-radius: 50px;

  &:hover {
    cursor: pointer;
  }
`;

const Back = styled.img`
  font-size: 12px;
  position: absolute;
  top: 40px;
  left: 50px;
  background-color: white;
  border-radius: 50px;

  &:hover {
    cursor: pointer;
  }
`;

const Modal = styled.div`
  width: 50%;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 5px solid black;
  position: relative;

  @media (max-width: 800px) {
    width: 100%;
    height: 100vh;
  }
`;

const Form = styled.form`
  width: 500px;
  height: 500px;
  padding: 20px;
  padding-top: 40px;
`;

const Label = styled.label`
  padding-bottom: 10px;
`;

const InputWrapper = styled.div`
  display: flex;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(20px);
    font-family: "system-ui";
  }

  input {
    border: 2px solid #f5f5f5;
    height: 40px;
    width: 100%;
    padding-left: 22px;
    font-size: 16px;
    background-color: #f5f5f5;
    -webkit-appearance: none;

    &:focus,
    &:active {
      border: 2px solid black;
      outline: none;
    }
  }
`;

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  padding: 20px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: 0.25s ease-in-out;

  h2 {
    text-align: center;
  }
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  font-size: 18px;
`;
