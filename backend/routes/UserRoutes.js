const router = require("express").Router();
const UserController = require("../controllers/UserController");
const AuthRoute = require("./AuthRoute");

router.use("/", AuthRoute.AuthHandler);

router
  .route("/")
  .post(UserController.createUser)
  .patch(UserController.editUser)
  .delete(UserController.deleteUser);

module.exports = router;
