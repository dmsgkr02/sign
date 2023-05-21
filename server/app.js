const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get('/', (req, res) => {
  res.json('hello world');
});

app.listen(process.env.SERVER_PORT, () => {
  console.log("server is running");
});