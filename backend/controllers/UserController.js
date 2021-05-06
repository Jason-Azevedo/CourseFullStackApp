const UserModel = require("../models/UserModel");

exports.login = function (req, res) {
  // Validate the user credentials
  const userCredentials = {
    username: req.body.username,
    password: req.body.password,
  };

  UserModel.find(userCredentials.username)
    .then((user) => {
      if (user === null) {
        res.json({ error: "User doesn't exist" });
        return;
      }

      if (userCredentials.username !== user.username) {
        res.json({ error: "Invalid credentials" });
        return;
      } else if (userCredentials.password !== user.password) {
        res.json({ error: "Invalid credentials" });
        return;
      }

      // User should be legit
      req.session.isLoggedIn = true;
      res.json({ redirect: "/", username: user.username });
    })
    .catch(console.error);
};

exports.logout = function (req, res) {
  if (req.session.isLoggedIn) req.session.isLoggedIn = false;
  res.json({ redirect: "/login" });
};

exports.createUser = function (req, res) {
  if (req.body.username === "" || req.body.username === undefined)
    res.json({ error: "Username cannot be empty" });
  else if (req.body.password === "" || req.body.password === undefined)
    res.json({ error: "Password cannot be empty" });

  const newUser = { username: req.body.username, password: req.body.password };
  UserModel.create(newUser)
    .then(() => res.json({ redirect: "/login" }))
    .catch((err) => {
      console.log(err);

      if (err.code === 11000) {
        res.json({ error: "User already exists" });
        return;
      } else {
        res.json({ error: "An error occured" });
      }
    });
};
exports.editUser = function (req, res) {
  res.json({ error: "Still in development!" });
};
exports.deleteUser = function (req, res) {
  res.json({ error: "Still in development!" });
};
