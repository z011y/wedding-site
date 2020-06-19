import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51GuBfJFhAffo2I0dzZKGXwOPVIytXbuoHKNZKh1tyoO18UAbKjmwgLPg5whAREpMXWnnioOuJVQrSX3l78LFOHVB00pKB6NSnH"
);

export default function Stripe({ amount, price }) {
  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: price, quantity: 1 }],
      mode: "payment",
      successUrl: "https://cameronandnicole.com/success",
      cancelUrl: "https://cameronandnicole.com/cancel",
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };
  return <Button onClick={handleClick}>continue</Button>;
}

const Button = styled.button`
  width: 150px;
  height: 50px;
  font-size: 18px;
`;
