import React from "react";
import NextHead from "next/head";

const Head = ({ title, description }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || ""}</title>
    <meta name="description" content={description || ""} />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
    />
    <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />

    <link rel="stylesheet" href="/static/css/hamburger.min.css" />

    <script src="https://unpkg.com/scrollreveal"></script>
    <script src="https://js.stripe.com/v3/"></script>
  </NextHead>
);

export default Head;
