// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const stripe = require("stripe")(
  "sk_test_51GuBfJFhAffo2I0divPKZBR9QWc5T2Sda95ohcBeFgISCVEhuDhGDnwzP10yyP2YUG71d100wRdZoBIRwCckIYsD00kSJYXrXi",
  { apiVersion: "" }
);

export default async function createPrice(req, res) {
  const { amount } = req.body;

  const product = await stripe.products.create({
    name: "Donation",
  });

  const price = await stripe.prices.create({
    product: product.id,
    unit_amount: amount,
    currency: "usd",
  });

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ price: price.id }));
}
