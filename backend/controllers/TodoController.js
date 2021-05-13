const TodoModel = require("../models/TodoModel");

exports.getTodos = function (req, res) {
  TodoModel.getAll(req.session.user._id)
    .then((data) => {
      const todos = data.map((todo) => {
        return {
          _id: todo._id,
          title: todo.title,
          description: todo.description,
        };
      });

      res.json(todos);
    })
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

exports.editTodo = function (req, res) {
  const todo = {
    _id: req.body._id,
    title: req.body.title,
    description: req.body.description,
    userId: req.session.user._id,
  };

  // Validation
  let isError = false;
  if (todo.title === "" || todo.title === undefined) isError = true;
  else if (todo.description === "" || todo.description === undefined)
    isError = true;
  else if (todo._id === "" || todo._id === undefined) isError = true;

  if (isError) {
    res.json({ error: "Missing values in request" });
    return;
  }

  // Edit
  TodoModel.edit(todo)
    .then(() => {
      TodoModel.getTodo(todo.userId, todo._id).then((data) => {
        const editedTodo = {
          _id: data._id,
          title: data.title,
          description: data.description,
          userId: data.userId,
        };

        res.json(editedTodo);
      });
    })
    .catch((err) => res.json({ error: "An error occured" }));
};

exports.deleteTodo = function (req, res) {};
