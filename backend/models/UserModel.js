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
function createUser(user) {
  const newUser = await new UserModel(user);
  newUser.save();
}

function editUser(user) {
  return await UserModel.updateOne({_id: user._id}, user)
}

function getUser(username) {
  return await UserModel.findOne({username: username});
}
function deleteUser(username) {
  return await UserModel.remove({username: username});
}

exports.create = createUser;
exports.edit = editUser;
exports.find = getUser;
exports.delete = deleteUser;
