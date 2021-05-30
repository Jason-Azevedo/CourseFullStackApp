const router = require("express").Router();
const UserController = require("../controllers/UserController");
const AuthHandler = require("./AuthHandler");

// Patch and Delete method require auth.
router
  .route("/")
  .post(UserController.createUser)
  .patch(AuthHandler, UserController.editUser)
  .delete(AuthHandler, UserController.deleteUser);

module.exports = router;
