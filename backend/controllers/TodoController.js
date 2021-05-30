const TodoModel = require("../models/TodoModel");
const StringEmptyOrUndefined = require("../utils/StringEmptyOrUndefined");

/**
 *  A middleware method for GET '/todo' which responds with
 *  all of the users todos in json.
 */
exports.getTodos = function (req, res) {
  // Fetch all of the logged in user's todos.
  TodoModel.getAll(req.session.user._id)
    .then(data => {
      // Filter the correct attributes to return to the user
      const todos = data.map(todo => {
        return {
          _id: todo._id,
          title: todo.title,
          description: todo.description,
        };
      });

      res.json(todos);
    })
    // Log any errors with an appropriate response.
    .catch(err => {
      console.log("Error occured" + err);
      res.json({ error: "An error occured" });
    });
};

/**
 *  A middleware method for POST '/todo' which creates the todo
 *  for the user.
 */
exports.createTodo = function (req, res) {
  const newTodo = {
    userId: req.session.user._id,
    title: req.body.title,
    description: req.body.description,
  };

  // Validation
  let error = false;
  if (StringEmptyOrUndefined(newTodo.title)) error = true;
  else if (StringEmptyOrUndefined(newTodo.description)) error = true;

  if (error) {
    res.json({ error: "Missing values in request" });
    return;
  }

  // Create the todo
  TodoModel.create(newTodo)
    .then(todo => {
      res.json({
        _id: todo._id,
        title: todo.title,
        description: todo.description,
      });
    })
    .catch(() => res.json({ error: "An error occured" }));
};

/**
 *  A middleware method for PATCH '/todo' which edits the todo
 *  for the user.
 */
exports.editTodo = function (req, res) {
  const todo = {
    _id: req.body._id,
    title: req.body.title,
    description: req.body.description,
    userId: req.session.user._id,
  };

  // Validation
  let isError = false;
  if (StringEmptyOrUndefined(todo.title)) isError = true;
  else if (StringEmptyOrUndefined(todo.description)) isError = true;
  else if (StringEmptyOrUndefined(todo._id)) isError = true;

  if (isError) {
    res.json({ error: "Missing values in request" });
    return;
  }

  // Edit the todo
  TodoModel.edit(todo)
    .then(() => res.json({ status: "ok" }))
    .catch(err => res.json({ error: "An error occured" }));
};

/**
 *  A middleware method for DELETE '/todo' which deletes the todo
 *  for the user.
 */
exports.deleteTodo = function (req, res) {
  const todo = {
    _id: req.body._id,
    userId: req.session.user._id,
  };

  // Validation
  if (StringEmptyOrUndefined(todo._id)) {
    res.json({ error: "Missing values in request" });
    return;
  }

  // Delete the todo
  TodoModel.delete(todo)
    .then(data => res.json({ status: "ok" }))
    .catch(err => {
      res.json({ error: "An error occured" });
      console.log(err);
    });
};
