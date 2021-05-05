const UserModel = require("../models/UserModel");

exports.login = function (req, res) {
  // Log the user in!
  // Then return their updated state {username}
};

exports.logout = function (req, res) {
  // Logout
};

exports.createUser = function (req, res) {
  if (req.body.username === "" || req.body.username === undefined)
    res.json({ error: "Username cannot be empty" });
  else if (req.body.password === "" || req.body.password === undefined)
    res.json({ error: "Password cannot be empty" });

  const newUser = { username: req.body.username, password: req.body.password };
  UserModel.create(newUser)
    .then(() => res.redirect("/login"))
    .catch((err) => {
      console.log(err);

      if (err.code === 11000) res.json({ error: "User already exists" });
      else res.json({ error: "An error occured" });
    });
};
exports.editUser = function (req, res) {};
exports.deleteUser = function (req, res) {};
