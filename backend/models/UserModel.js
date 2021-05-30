const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
});
const UserModel = mongoose.model("User", UserSchema);

/**
 *  Create new user in the database.
 *
 * @param   {object} user - The user object.
 * @returns               - A promise.
 */
async function createUser(user) {
  const newUser = await new UserModel(user);
  return newUser.save();
}

/**
 *  Edit the user in the database.
 *
 * @param   {object} user - The user object.
 * @returns               - A promise.
 */
async function editUser(user) {
  return await UserModel.updateOne({ _id: user._id }, user);
}

/**
 *  Fetch the user from the database.
 *
 * @param   {object} user - The user object.
 * @returns               - A promise.
 */
async function getUser(username) {
  return await UserModel.findOne({ username: username });
}

/**
 *  Delete the user from the database.
 *
 * @param   {object} user - The user object.
 * @returns               - A promise.
 */
async function deleteUser(_id) {
  return await UserModel.remove({ _id: _id });
}

exports.create = createUser;
exports.edit = editUser;
exports.find = getUser;
exports.delete = deleteUser;
