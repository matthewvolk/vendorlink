var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");

router.post("/create", (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, 10);

  console.log({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    encrypted_password: hash,
    req_headers: req.headers
  });

  res.json({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    encrypted_password: hash,
    req_headers: req.headers
  });

  /**
   * @todo add passport.js? => Done
   * @todo save user to database => Done
   * @todo should this return a cookie, session, token, etc.? => Token
   *
   * @todo add Sequelize CLI? => Yes
   * https://www.djamware.com/post/5bf94d9a80aca747f4b9ce9f/secure-nodejs-expressjs-and-postgresql-api-using-passportjs
   *
   * @todo add API call in /client/components/nav component to check if user is logged in to dynamically change nav items
   * @todo add login
   * @todo add forgot password
   *
   *
   * @note Flow:
   * [X] User navigates to registration page on Next.js
   * [X] User fills out form data
   * [X] User hits "Submit"
   * [X] Form data sent to this route
   * [] User data saved to database
   * [] Passport: https://stackoverflow.com/questions/17957650/passport-authentication-immediately-after-new-user-registration
   *
   * @problem Passport.js authenticates SERVER routes, but not Next.js routes. So, for example, if Passport.js uses a JWT
   * to authenticate users from route to route, I should probably somehow send that JWT back to Next.js and create a
   * "withAuth" Higher Order Component that verifies users using the same JWT for convenience. Otherwise,
   * I'd have one cookie to authenticate users on the server routes and one cookie to authenticate users in the HOC
   * Maybe implement: https://whoisryosuke.com/blog/2018/nextjs-authentication-using-oauth2-jwt/
   * Also read: https://spectrum.chat/next-js/general/authenticate-routes-or-pages~33e086a1-f863-4208-a089-c0eb0bc5b029
   * This example uses a GitHub username ID as a cookie, but that might be insecure if someone guesses the ID:
   * https://github.com/zeit/next.js/blob/canary/examples/with-cookie-auth/www/utils/auth.js
   * Or look at this: https://auth0.com/blog/next-js-authentication-tutorial/
   *
   * @todo CORS for Firefox:
   * Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://localhost:3001/api/v1/auth/user/create. (Reason: missing token ‘content-type’ in CORS header ‘Access-Control-Allow-Headers’ from CORS preflight channel).
   * An error occured, not redirecting the user TypeError: "NetworkError when attempting to fetch resource." index.js:1
   * Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://localhost:3001/api/v1/auth/user/create. (Reason: CORS request did not succeed).
   */
});

module.exports = router;
