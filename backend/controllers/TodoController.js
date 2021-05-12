const TodoModel = require("../models/TodoModel");

exports.getTodos = function (req, res) {
  TodoModel.getAll(req.session.user._id)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("Error occured" + err);
      res.json({ error: "An error occured" });
    });
};

exports.createTodo = function (req, res) {};
exports.editTodo = function (req, res) {};
exports.deleteTodo = function (req, res) {};
