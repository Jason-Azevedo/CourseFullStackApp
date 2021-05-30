const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  userId: String,
});
const TodoModel = mongoose.model("todo", TodoSchema);

/**
 *  Create a todo and store it in the database.
 *
 * @param {object} todo - The todo object.
 * @returns             - A promise.
 */
async function createTodo(todo) {
  const newTodo = await new TodoModel(todo);
  return newTodo.save();
}

/**
 *  Edit a todo and save the changes in the database.
 *
 * @param {object} todo - The todo object.
 * @returns             - A promise.
 */
async function editTodo(todo) {
  return await TodoModel.updateOne({ _id: todo._id }, todo);
}

/**
 * Fetches all of the user's todos.
 *
 * @param {string} userId - The user's id
 * @returns               - A promise.
 */
async function getTodos(userId) {
  return await TodoModel.find({ userId: userId });
}

/**
 *  Deletes a specific todo from the database.
 *
 * @param {object} todo - The todo object.
 * @returns             - A promise.
 */
async function deleteTodo(todo) {
  return await TodoModel.deleteOne({ userId: todo.userId, _id: todo._id });
}

exports.create = createTodo;
exports.edit = editTodo;
exports.getAll = getTodos;
exports.delete = deleteTodo;
