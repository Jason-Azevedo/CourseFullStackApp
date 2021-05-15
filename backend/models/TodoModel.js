const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  userId: String,
});
const TodoModel = mongoose.model("todo", TodoSchema);

async function createTodo(todo) {
  const newTodo = await new TodoModel(todo);
  return newTodo.save();
}

async function editTodo(todo) {
  return await TodoModel.updateOne({ _id: todo._id }, todo);
}

async function getTodos(userId) {
  return await TodoModel.find({ userId: userId });
}

async function getTodo(userId, todoId) {
  return await TodoModel.findOne({ _id: todoId, userId: userId });
}

async function deleteTodo(todo) {
  return await TodoModel.deleteOne({ userId: todo.userId, _id: todo._id });
}

exports.create = createTodo;
exports.edit = editTodo;
exports.getAll = getTodos;
exports.getTodo = getTodo;
exports.delete = deleteTodo;
