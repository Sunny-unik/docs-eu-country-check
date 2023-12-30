import express from "express";
import cors from "cors";
import { config } from "dotenv";
import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../views/App";

config();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, "assets")));

app.get("/health", (_req, res) => res.send("OK"));

app.get("*", (req, res) => {
  fs.readFile(path.resolve("public/index.html"), "utf8", (err, data) => {
    if (err) return res.status(500).send("Internal Server Error");

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(
          <StaticRouter location={req.url}>
            <App />
          </StaticRouter>
        )}</div>`
      )
    );
  });
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
