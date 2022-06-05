import React, { useState, useEffect } from "react";
// // y

// const ProductDisplay = () => (
//   <section>
//     <div className="product">
//       <img
//         src="https://i.imgur.com/EHyR2nP.png"
//         alt="The cover of Stubborn Attachments"
//       />
//       <div className="description">
//       <h3>Stubborn Attachments</h3>
//       <h5>$20.00</h5>
//       </div>
//     </div>
//     <form action="/create-checkout-session" method="POST">
//       <button type="submit">
//         Checkout
//       </button>
//     </form>
//   </section>
// );

// const Message = ({ message }) => (
//   <section>
//     <p>{message}</p>
//   </section>
// );

// export default function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search);

//     if (query.get("success")) {
//       setMessage("Order placed! You will receive an email confirmation.");
//     }

//     if (query.get("canceled")) {
//       setMessage(
//         "Order canceled -- continue to shop around and checkout when you're ready."
//       );
//     }
//   }, []);

//   return message ? (
//     <Message message={message} />
//   ) : (
//     <ProductDisplay />
//   );
// }

function donationForm(){
    return (
        <section>
            <div class="sr-root">
      <div class="sr-main" style="display: flex;">
        <header class="sr-header">
          <div class="sr-header__logo"></div>
        </header>
        <div class="sr-container">
          <section class="container">
            <h1>One-time Donation</h1>
            <button
              data-checkout-mode="payment"
              data-price-id="sku_GU4JYXyvvRb2sX"
            >
              Donate $5.00 once
            </button>
            <button
              data-checkout-mode="payment"
              data-price-id="sku_GU4KO8nfdg8G2Z"
            >
              Donate $15.00 once
            </button>
            <button
              data-checkout-mode="payment"
              data-price-id="sku_GU4LB0wBViiYsm"
            >
              Donate $50.00 once
            </button>
          </section>
          <section class="container">
            <h1>Recurring Donation</h1>
            <button
              data-checkout-mode="subscription"
              data-price-id="plan_GU4MXg0k0Uv1S6"
            >
              Donate $20.00 per month
            </button>
          </section>
        </div>
        <div id="error-message"></div>
      </div>
    </div>
        </section>
    )
}

export default donationForm;