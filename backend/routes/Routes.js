const router = require("express").Router();
const TodoRoutes = require("./TodoRoutes");
const UserRoutes = require("./UserRoutes");
const UserController = require("../controllers/UserController");

router.post("/login", UserController.login);
router.get("/logout", UserController.logout);

/**
 *  Registers all of the api routes for the app
 *
 * @param {object} app - The express app instance
 */
const registerRoutes = app => {
  // Register routes here
  app.use("/todo", TodoRoutes);
  app.use("/user", UserRoutes);

  // Leave this last because of how middlewares work!
  app.use("/", router);
};

exports.registerRoutes = registerRoutes;
