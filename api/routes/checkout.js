require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
var express = require("express");
var router = express.Router();

router.post("/", (req, res) => {
  const chargeAmount = parseInt(req.body.amount);
  const customerToken = req.body.token;
  const customerEmail = req.body.customerEmail;
  const chargeDescription = req.body.description;

  // console.log(`${chargeAmount}, ${typeof chargeAmount}`)
  // console.log(`${customerToken}, ${typeof customerToken}`)

  stripe.charges.create(
    {
      amount: chargeAmount,
      currency: "usd",
      source: customerToken, // obtained with Stripe.js
      description: chargeDescription,
      receipt_email: customerEmail
    },
    (err, charge) => {
      if (err) {
        switch (err.type) {
          case "StripeCardError":
            // A declined card error
            res.status(500).send({ error: err });
            console.log(err.message);
            break;
          case "RateLimitError":
            // Too many requests made to the API too quickly
            res.status(500).send({ error: err });
            console.log(err.message);
            break;
          case "StripeInvalidRequestError":
            // Invalid parameters were supplied to Stripe's API
            res.status(500).send({ error: err });
            console.log(err.message);
            break;
          case "StripeAPIError":
            // An error occurred internally with Stripe's API
            res.status(500).send({ error: err });
            console.log(err.message);
            break;
          case "StripeConnectionError":
            // Some kind of error occurred during the HTTPS communication
            res.status(500).send({ error: err });
            console.log(err.message);
            break;
          case "StripeAuthenticationError":
            // You probably used an incorrect API key
            res.status(500).send({ error: err });
            console.log(err.message);
            break;
          default:
            // Handle any other types of unexpected errors
            res.status(500).send({ error: err });
            console.log(err.message);
            break;
        }
      } else {
        console.log(`${chargeDescription}`);
        res.status(200).send({ success: charge });

        /**
         * @todo https://stripe.com/docs/api/errors/handling
         * @todo send email notification
         * @todo send receipt to customer
         */
      }
    }
  );
});

module.exports = router;
