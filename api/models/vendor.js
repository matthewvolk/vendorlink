"use strict";
const bcrypt = require("bcrypt");
const slugify = require("slugify");

const hashPassword = password => {
  return new Promise((resolve, reject) => {
    resolve(bcrypt.hash(password, bcrypt.genSaltSync(8)));
  });
};

module.exports = (sequelize, DataTypes) => {
  const Vendor = sequelize.define(
    "Vendor",
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      company_name: DataTypes.STRING,
      contact_name: DataTypes.STRING,
      contact_email: DataTypes.STRING,
      website_url: DataTypes.STRING,
      url_slug: DataTypes.STRING,
      hourly_rate: DataTypes.STRING,
      location: DataTypes.STRING,
      working_hours: DataTypes.STRING,
      active: DataTypes.BOOLEAN
    },
    {}
  );

  Vendor.associate = function(models) {};

  Vendor.beforeCreate((vendor, options) => {
    return hashPassword(vendor.password).then(hashedPw => {
      vendor.password = hashedPw;
    });
  });

  Vendor.beforeCreate((vendor, options) => {
    let slug = slugify(vendor.company_name, {
      remove: /[*+~.,()'"!:@]/g,
      lower: true
    });
    vendor.url_slug = slug;
  });

  Vendor.beforeCreate((vendor, options) => {
    vendor.active = false;
  });

  return Vendor;
};
