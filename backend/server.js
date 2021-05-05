const express = require("express");
const app = express();
const db = require("./db");
const Routes = require("./routes/Routes");

// Load enviorment variables
require("dotenv").config();

// App variables
const PORT = process.env.PORT || 3001;

// Setup our db
db.connect(process.env.MONGO_URI || "mongodb://localhost/todoapp");

// Middlewares
app.use(express.json());

// Leave routes last!!
Routes.registerRoutes(app);

app.listen(PORT, (req, res) => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
