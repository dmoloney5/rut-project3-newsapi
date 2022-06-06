import React, { useState } from "react";
// //   import logo from "./logo.svg";
// import "./App.css";
import StripeCheckout from "react-stripe-checkout";
// import Button from "react-bootstrap/Button";

function Donation() {
  const [item] = useState({
    name: "Donate 10",
    price: "10",
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
    <div>
      <form>
        <label>
          First Name:
          <input type="text" name="name" />
        </label>
        <label>
          Last Name:
          <input type="text" name="name" />
        </label>
        <label>
          Address:
          <input type="text" name="address" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Donatation:
          <input type="text" name="donate" value="amount" />
        </label>
      </form>

      <StripeCheckout
        stripeKey={process.env.REACT_APP_KEY}
        token={payment}
        name="Donation"
        amount={"amount" * 100}
      >
        <button>Donate </button>
      </StripeCheckout>
    </div>
  );
}

export default Donation;
