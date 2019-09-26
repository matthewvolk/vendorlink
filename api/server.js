require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const passport = require("passport");
require("./config/passport")(passport);

/**
 * @todo fix CORS for production, only allow Next.js client for
 * dev, production, and maybe an admin dashboard for coupons etc.
 * https://medium.com/@electra_chong/what-is-cors-what-is-it-used-for-308cafa4df1a
 *
 * const originsWhitelist = [ "http://localhost:3000", "https://www.vendorlink.co" ];
 * const corsOptions = {
 *  origin: function(origin, callback) {
 *    const isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
 *    callback(null, isWhitelisted);
 *  },
 *  credentials: true
 * };
 *
 * app.use(cors(corsOptions));
 */
app.use(cors({ origin: "*", allowedHeaders: "*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

// Test Sequelize connection
const sequelize = require("./models/index").sequelize;
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

app.use("/api/v1/checkout", require("./routes/checkout"));
app.use("/api/v1/vendors", require("./routes/vendors"));
app.use("/api/v1/users", require("./routes/users"));
app.get("/", (req, res) => res.json({ version: 1 }));

app.listen(port, () =>
  console.log(`\n> VendorLink API listening on port http://localhost:${port}!`)
);
