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
async function deleteTodo(todo) {
  return await TodoModel.deleteOne({ userId: todo.userId, _id: todo.todoId });
}

exports.create = createTodo;
exports.edit = editTodo;
exports.getAll = getTodos;
exports.delete = deleteTodo;
