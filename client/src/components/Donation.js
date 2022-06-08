import React, { useState } from "react";
// //   import logo from "./logo.svg";
 import "../App.css";
import StripeCheckout from "react-stripe-checkout";
// import Button from "react-bootstrap/Button";
import DonationOptions from "./DonationOptions";
import DonationPage from "./DonationPage/index";
import "react-bootstrap";

function Donation() {
  const [item, setItem] = useState({
    name: "Donate",
    price: 5,
  });

  const payment = (token) => {
    const body = {
      token,
      item,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(`http://localhost:8282/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE", response);
        const { status } = response;
        console.log("STATUS", status);
      })
      .catch((error) => console.log(error));
  };

  

  return (
    <div class="row justify-content-md-center">
      <div class="col-md-10">
      <DonationPage />
      </div>
      <div class="col-md-4">
      <DonationOptions item={item} setItem={setItem} />
      <StripeCheckout
        stripeKey={process.env.REACT_APP_KEY}
        token={payment}
        name="Pay with Card"
        amount={"amount" * 100}
      >
        <button>Donate </button>
      </StripeCheckout>
      </div>
    </div>
  );
}

export default Donation;
