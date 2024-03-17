require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const storeItems = new Map([[1, { priceInCents: 39900, name: "Pro Package" }]]);

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((items) => {
        const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      success_url: [`${process.env.SERVER_URL}/success.html`],
      cancel_url: [`${process.env.SERVER_URL}/cancel.html`],
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(3000);
