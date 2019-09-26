const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const models = require("../models/index");
const User = models.User;
const Vendor = models.Vendor;

module.exports = passport => {
  passport.use(
    "user",
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.USER_SECRET
      },
      (payload, done) => {
        User.findByPk(payload.id).then(user => {
          if (!user)
            return done(null, false, { message: "User does not exist." });
          done(null, user);
        });
      }
    )
  );

  passport.use(
    "vendor",
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.VENDOR_SECRET
      },
      (payload, done) => {
        Vendor.findByPk(payload.id).then(vendor => {
          if (!vendor)
            return done(null, false, { message: "Vendor does not exist." });
          done(null, vendor);
        });
      }
    )
  );
};
