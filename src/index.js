import express from "express";
import cors from "cors";
import { config } from "dotenv";

config();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get("/health", (_req, res) => res.send("OK"));

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
