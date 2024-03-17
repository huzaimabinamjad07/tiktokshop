require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const storeItems = new Map([[1, { priceInCents: 39900, name: "Pro Package" }]]);

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

app.post("/create-checkout-session", (req, res) => {
  res.json("Hi");
});

app.listen(3000);
