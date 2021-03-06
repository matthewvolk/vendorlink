const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const yup = require("yup");
const passport = require("passport");
const models = require("../models/index");
const Vendor = models.Vendor;

const data = {
  vendors: [
    {
      id: 3,
      name: "Miko Batoon - Web Designer",
      rate: 60.0,
      slug: "miko-batoon",
      skills: ["UI/UX", "App Design", "Web Design"],
      timezone: "@todo",
      votes: "99",
      contactEmail: "@todo",
      websiteUrl: ""
    },
    {
      id: 1,
      name: "Soft Loft - Magento Developers",
      rate: 65.0,
      slug: "petr-datsko",
      skills: ["Magento", "PHP", "Laravel", "Symfony"],
      timezone: "@todo",
      votes: "80",
      contactEmail: "@todo",
      websiteUrl: "https://soft-loft.eu"
    },
    {
      id: 2,
      name: "Clawrock - Shopify Developers",
      rate: 65.0,
      slug: "sergey-vlasov",
      skills: ["Magento", "PHP"],
      timezone: "@todo",
      votes: "77",
      contactEmail: "@todo",
      websiteUrl: "https://clawrock.com"
    },
    {
      id: 4,
      name: "Jan Smith - Web Designer",
      rate: 55.0,
      slug: "jan-smith",
      skills: ["UI", "UX", "Product Design"],
      timezone: "@todo",
      votes: "78",
      contactEmail: "@todo",
      websiteUrl: ""
    },
    {
      id: 5,
      name: "Mohammed Idrees - Magento Developers",
      rate: 65.0,
      slug: "mohammed-idrees",
      skills: ["Magento", "PHP", "Laravel", "Symfony"],
      timezone: "@todo",
      votes: "64",
      contactEmail: "@todo",
      websiteUrl: "https://www.rltsquare.com"
    },
    {
      id: 6,
      name: "Lila Gawrys - Web Designer",
      rate: 80.0,
      slug: "lila-gawrys",
      skills: ["UI", "UX", "Sketch", "Invision"],
      timezone: "@todo",
      votes: "55",
      contactEmail: "@todo",
      websiteUrl: ""
    },
    {
      id: 7,
      name: "Jen Meredith - Web Designer",
      rate: 90.0,
      slug: "jen-meredith",
      skills: ["UX", "UI", "Web Design"],
      timezone: "@todo",
      votes: "88",
      contactEmail: "@todo",
      websiteUrl: "http://jenmeredith.com/"
    },
    {
      id: 8,
      name: "Rock Techno Labs - PHP Developers",
      rate: 25.0,
      slug: "jeet-rock",
      skills: ["Magento", "PHP", "Laravel", "Symfony"],
      timezone: "@todo",
      votes: "60",
      contactEmail: "@todo",
      websiteUrl: "https://rocktechnolabs.com"
    }
  ]
};

router.get("/", (req, res) => {
  /**
   * @todo
   * connect to database
   * query all vendor data
   * build a JSON object like data above
   */
  res.json(data);
});

router.post("/create", (req, res) => {
  res.json({
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name
  });

  /**
   * @todo create vendor with 'active' property set to false
   */
});

router.post("/create/v2", (req, res) => {
  let schema = yup.object().shape({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    company_name: yup.string().required(),
    contact_name: yup.string().required(),
    contact_email: yup.string().required(),
    website_url: yup.string().required(),
    hourly_rate: yup.string().required(),
    location: yup.string().required(),
    working_hours: yup.string().required(),
  });

  schema
    .validate(req.body)
    .then(value => {
      const {
        first_name,
        last_name,
        email,
        password,
        company_name,
        contact_name,
        contact_email,
        website_url,
        hourly_rate,
        location,
        working_hours
      } = value;

      Vendor.findOrCreate({
        where: {
          email
        },
        defaults: {
          first_name,
          last_name,
          password,
          company_name,
          contact_name,
          contact_email,
          website_url,
          hourly_rate,
          location,
          working_hours
        }
      })
        .then(([vendor, created]) => {
          console.log(
            vendor.get({
              plain: true
            })
          );
          created
            ? res.status(201).send({ success: "Vendor Created!" })
            : res.status(201).send({ error: "Vendor already exists, so it was not created." });
        })
        .catch(err => {
          console.log(err);
          res.status(500).send({
            message: "Something went wrong creating this vendor.",
            err
          });
        });
    })
    .catch(err => {
      return res.status(400).send({ error: { type: err.name, message: err.message, criteria: err.type } });
    })
});

router.post("/login", (req, res) => {
  let schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required()
  });

  schema.validate(req.body)
    .then(valid => {
      const { email, password } = valid

      Vendor.findOne({ where: { email } }).then(vendor => {
        if (!vendor) return res.status(500).send({ error: "Vendor with those credentials does not exist in the database" });
        bcrypt
          .compare(password, vendor.get("password"))
          .then(match => {
            if (match) {
              const payload = { id: vendor.id, type: "Vendor" };
              const token = jwt.sign(payload, process.env.VENDOR_SECRET);
              res.send({ message: "Successfully created JWT", token });
            } else {
              res.status(401).send({ error: "Incorrect Password!" });
            }
          })
          .catch(err =>
            res.status(500).send({
              message:
                "Something went wrong comparing your password to the password stored in the vendor database.",
              error
            })
          );
      });
    })
    .catch(err => {
      return res.status(401).send({ error: { type: err.name, message: err.message, criteria: err.type } });
    })
});

router.get(
  "/protected",
  passport.authenticate("vendor", { session: false }),
  (req, res) => {
    res.send({
      message: "Success",
      vendor: req.user
    });
  }
);

router.get("/:slug", (req, res) => {
  const vendor = data.vendors.filter(vendor => vendor.slug == req.params.slug);
  res.json(vendor[0]);
});

module.exports = router;
