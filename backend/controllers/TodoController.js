const TodoModel = require("../models/TodoModel");

exports.getTodos = function (req, res) {
  TodoModel.getAll(req.session.user._id)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("Error occured" + err);
      res.json({ error: "An error occured" });
    });
};

exports.createTodo = function (req, res) {
  const newTodo = {
    userId: req.session.user._id,
    title: req.body.title,
    description: req.body.description,
  };

  if (newTodo.title === undefined || newTodo.title === "") {
    res.json({ error: "Title of todo is empty" });
    return;
  } else if (newTodo.description === undefined || newTodo.description === "") {
    res.json({ error: "Description of todo is empty" });
    return;
  }

  TodoModel.create(newTodo)
    .then((todo) => {
      res.json({
        _id: todo._id,
        title: todo.title,
        description: todo.description,
      });
    })
    .catch(() => res.json({ error: "An error occured" }));
};

exports.editTodo = function (req, res) {};
exports.deleteTodo = function (req, res) {};
