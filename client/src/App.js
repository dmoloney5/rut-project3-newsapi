import React, { useState } from "react";
//   import logo from "./logo.svg";
import "./App.css";
import StripeCheckout from "react-stripe-checkout";
// import Button from "react-bootstrap/Button";

function App() {
  const [item] = useState({
    name: "Donation",
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
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <StripeCheckout
          stripeKey={process.env.REACT_APP_KEY}
          token={payment}
          name="Donation"
          amount={item.price * 100}
        >
          <button>Donate ${item.price}</button>
        </StripeCheckout>
      </header>
    </div>
  );
}

export default App;