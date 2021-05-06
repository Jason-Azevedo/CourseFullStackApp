const router = require("express").Router();
const TodoRoutes = require("./TodoRoutes");
const UserRoutes = require("./UserRoutes");
const UserController = require("../controllers/UserController");

// TODO: Return react .html file in GET /
router.route("/").get((req, res) => {
  res.send("Hello World, from router!");
});

router.post("/login", UserController.login);
router.get("/logout", UserController.logout);

const registerRoutes = (app) => {
  // Register routes here
  app.use("/todo", TodoRoutes);
  app.use("/user", UserRoutes);

  // Leave this last because of how middlewares work!
  app.use("/", router);
};

exports.registerRoutes = registerRoutes;
