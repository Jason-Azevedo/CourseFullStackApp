const express = require("express");
const app = express();
const Routes = require("./routes/Routes");

// Load enviorment variables
require("dotenv").config();

// App variables
const PORT = process.env.PORT || 3001;

// Middlewares

// Leave routes last!!
Routes.registerRoutes(app);

app.listen(PORT, (req, res) => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
