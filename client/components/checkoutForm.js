import React from 'react';
import { useState } from 'react'
import Router from 'next/router'
import { injectStripe } from "react-stripe-elements-universal";
import { CardElement } from "react-stripe-elements-universal";

const CheckoutForm = ({ subTotal, productNames, stripe }) => {
  const [status, setStatus] = useState({code: "default", message: ""});

  const SUBTOTAL = subTotal.toFixed(2)
  const TAX_RATE = 0.08
  const GRAND_TOTAL = (SUBTOTAL * (TAX_RATE + 1)).toFixed(2)

  async function handleSubmit(e) {
    const customerEmail = document.querySelector('input[name="email"]').value;
    e.preventDefault();
    setStatus({code: "submitting"});
    if (stripe) {
      try {
        /** 
         * @todo Block payments that fail ZIP code validation: https://stripe.com/docs/radar/rules#traditional-bank-checks 
         */
        const { token, error } = await stripe.createToken();
        if (error) throw error; 
        
        const res = await fetch(`${process.env.API_URL}/api/v1/checkout`, {
          method: "POST",
          body: JSON.stringify({
            amount: GRAND_TOTAL * 100, // convert to cents for stripe
            token: token.id,
            description: `Charge ${customerEmail} ${GRAND_TOTAL} for ${productNames.join(', ')}`,
            customerEmail
          }),
          headers: {
            "content-type": "application/json"
          }
        });

        const json = await res.json();
        if (json.error) throw json.error; 

        setStatus({code: "success"});
        Router.push('/checkout-success');

      } catch (err) {
        if (err.type === "validation_error") {
          setStatus({code: "error", message: err.message})
        } else {
          setStatus({code: err.type, message: err.message})
        }
      }
    }
  }

  return (
    <section>

      <div><span><strong>Subtotal</strong>: ${SUBTOTAL}</span></div>

      {/** @todo Use Avalara or TaxJar for taxes */}
      
      <div><span><strong>Tax</strong>: ${(SUBTOTAL * TAX_RATE).toFixed(2)}</span></div>
      <div><span><strong>Grand Total</strong>: ${GRAND_TOTAL}</span></div>
      <br />

      <form onSubmit={handleSubmit}>
        <div><strong>Test Credit Card:</strong> 4242 4242 4242 4242</div>
        <div><strong>Test Credit Card with insufficient funds:</strong> 4000 0000 0000 9995</div>
        <br />

        <label htmlFor="full_name">Your Name:</label><br />
        <input type="text" name="full_name" id="full_name" placeholder="Jane Doe" required/>
        <br />
        <label htmlFor="email">Your Email:</label><br />
        <input type="email" name="email" id="email" placeholder="E-mail Address" required/>

        <CardElement style={{ base: {fontSize: "18px"} }}/>
        
        <button type="submit">
          {/* Button Text */}
          {(() => {
            switch (status.code) {
              case "default"    : return "Checkout"
              case "submitting" : return "Submitting..."
              case "success"    : return "Payment Complete!"
              default           : return "Error!"
            }
          })()}
        </button>

        {/* Error Messaging */}
        {(() => {
          if (status.code !== "default" || "submitting" || "success") {
            return <div className="error">{status.message}</div>
          }
        })()}
      </form>

      <style jsx>{`
        section {
          border: 1px solid #2085c4;
          background-color: rgba(32, 133, 196, 0.075);
          padding: 15px;
        }

        .error {
          color: red;
        }
      `}</style>
    </section>
  )
}

export default injectStripe(CheckoutForm)