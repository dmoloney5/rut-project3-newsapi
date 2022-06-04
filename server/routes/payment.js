const express = require('express');
const path = require('path');
const db = require('./config/connection');
 const stripe = require("stripe")('sk_test_51L5eeWEeZMz10B1GjVl4Wh0UzFbshuIYEfqnOTauyyGK0eXRLigx05CNATKWmGMRjfIyA7rvssttVevEdKhUepkP00Vvl0Jpze');

 app.use (cors())

 
app.post("/create-payment-intent", async (req, res) => {
  const { items, token } = req.body;
console.log({items});
// const idempontencyKey = uuid()
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });


  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});
