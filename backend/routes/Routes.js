const router = require("express").Router();
const TodoRoutes = require("./TodoRoutes");
const UserRoutes = require("./UserRoutes");

// TODO: Return react .html file in GET /
router.route("/").get((req, res) => {
  res.send("Hello World, from router!");
});

const registerRoutes = (app) => {
  // Register routes here
  app.use("/todo", TodoRoutes);
  app.use("/user", UserRoutes);

  // Leave this last because of how middlewares work!
  app.use("/", router);
};

exports.registerRoutes = registerRoutes;
