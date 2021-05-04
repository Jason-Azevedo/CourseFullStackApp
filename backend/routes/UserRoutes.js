const router = require("express").Router();
const UserController = require("../controllers/UserController");

router.get("/", (req, res) => {
  res.send("This is from the user page!!");
});

router.post("/login", UserController.login);

router.get("/logout", UserController.logout);

router
  .route("/")
  .post(UserController.createUser)
  .patch(UserController.editUser)
  .delete(UserController.deleteUser);

module.exports = router;
