const cors = require("cors");
const express = require("express");
const stripe = require("stripe")(process.env.REACT_APP_TEST_KEY)

const uuid = require("uuid");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("IT WORKS AT LEARCODEONLINE");
});

app.post("./payment", (req, res) => {
  const { item, token } = req.body;
  console.log("ITEM", item);
  console.log("PRICE", item.price);
  const idempotencyKey = uuid();

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
      shippingAdresss:"",
      billingAdress:""
    })
    .then((customer) => {
      stripe.charges.create({
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
      }),
        { idempotencyKey };
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});
app.listen(8282, () => console.log("listening at port 8282"));