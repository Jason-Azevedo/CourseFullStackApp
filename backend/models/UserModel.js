const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
});
const UserModel = mongoose.model("User", UserSchema);

// CRUD Methods:
async function createUser(user) {
  const newUser = await new UserModel(user);
  return newUser.save();
}

async function editUser(user) {
  return await UserModel.updateOne({ _id: user._id }, user);
}

async function getUser(username) {
  return await UserModel.findOne({ username: username });
}
async function deleteUser(_id) {
  return await UserModel.remove({ _id: _id });
}

exports.create = createUser;
exports.edit = editUser;
exports.find = getUser;
exports.delete = deleteUser;
