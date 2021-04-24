const express = require("express");
const app = express();

// Load enviorment variables
require("dotenv").config();

// App variables
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Welcome to the course todo app!");
});

app.listen(PORT, (req, res) => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
