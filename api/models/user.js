"use strict";
const bcrypt = require("bcrypt");

const hashPassword = password => {
  return new Promise((resolve, reject) => {
    resolve(bcrypt.hash(password, bcrypt.genSaltSync(8)));
  });
};

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );

  User.associate = function(models) {};

  User.beforeCreate((user, options) => {
    return hashPassword(user.password).then(hashedPw => {
      user.password = hashedPw;
    });
  });

  return User;
};
