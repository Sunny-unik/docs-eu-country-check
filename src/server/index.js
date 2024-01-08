import express from "express";
import cors from "cors";
import { config } from "dotenv";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../views/App";

config();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, "assets")));

app.get("/health", (_req, res) => res.send("OK"));

app.get("*", (req, res) => {
  const appMarkup = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  return res.send(
    `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Eu Country Check: Documentation</title>
            <script src="/app.js" async defer></script>
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="stylesheet" href="/app.css" />
          </head>
          <body>
            <div id="root">${appMarkup}</div>
        </body>
      </html>`
  );
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
