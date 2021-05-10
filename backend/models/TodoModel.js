const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  userId: String,
});
const TodoModel = mongoose.model("todo", TodoSchema);

async function createTodo(todo) {}
async function editTodo(todo) {}
async function getTodos(userId) {}
async function deleteTodo(todoId) {}

exports.create = createTodo;
exports.edit = editTodo;
exports.getAll = getTodos;
exports.delete = deleteTodo;
