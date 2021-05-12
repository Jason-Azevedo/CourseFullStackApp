const router = require("express").Router();
const TodoController = require("../controllers/TodoController");
const AuthHandler = require("./AuthHandler");

// Require auth for all routes
router.use("/", AuthHandler);

router
  .route("/")
  .get(TodoController.getTodos)
  .post(TodoController.createTodo)
  .patch(TodoController.editTodo)
  .delete(TodoController.deleteTodo);

module.exports = router;
