const cors = require('cors');
const express = require('express')
const app = express()
const port = 3001
const bodyParser = require("body-parser");

const checkout = require('./routes/checkout')
const vendors = require('./routes/vendors')
const auth = require('./routes/auth')

/**
 * @todo fix CORS for production, only allow Next.js client for
 * dev, production, and maybe an admin dashboard for coupons etc.
 */

app.use(cors({
  origin: "*",
  allowedHeaders: "*"
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const Sequelize = require('sequelize');
const sequelize = new Sequelize('vendorlink', 'vendorlink', 'test', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use('/api/v1/checkout', checkout)
app.use('/api/v1/vendors', vendors)
app.use('/api/v1/auth', auth)

app.get('/', (req, res) => res.json({
  "version": 1
}))

app.listen(port, () => console.log(`\n> VendorLink API listening on port http://localhost:${port}!`))