const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/vendor/:slug", (req, res) => {
      const actualPage = "/vendor";
      const queryParams = { slug: req.params.slug };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/checkout/:id", (req, res) => {
      const actualPage = "/checkout";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Next.js ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
