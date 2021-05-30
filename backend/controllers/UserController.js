const UserModel = require("../models/UserModel");
const StringEmptyOrUndefined = require("../utils/StringEmptyOrUndefined");

/**
 *  A middleware method for POST '/login' that allows the user
 *  to login if their credentials are correct.
 */
exports.login = function (req, res) {
  const userCredentials = {
    username: req.body.username,
    password: req.body.password,
  };

  UserModel.find(userCredentials.username)
    .then(user => {
      if (user === null) {
        res.json({ error: "User doesn't exist" });
        return;
      }

      // Validate
      let credentialError = false;
      if (userCredentials.username !== user.username) {
        credentialError = true;
      } else if (userCredentials.password !== user.password) {
        credentialError = true;
      }

      // Validation failed.
      if (error) {
        res.json({ error: "Invalid username or password" });
        return;
      }

      // User has successfully been validated.
      req.session.isLoggedIn = true;
      req.session.user = { _id: user._id, username: user.username };
      res.json({ redirect: "/", username: user.username });
    })
    .catch(err => {
      console.error(err);
      res.json({ error: "An error occured" });
    });
};

/**
 *  A middleware method for GET '/logout' that allows the user
 *  to logout.
 */
exports.logout = function (req, res) {
  // Set the current user session to logged out.
  if (req.session.isLoggedIn) req.session.isLoggedIn = false;

  res.json({ redirect: "/login" });
};

/**
 *  A middleware method for POST '/user' that creates user
 *  accounts.
 */
exports.createUser = function (req, res) {
  // Validate
  if (StringEmptyOrUndefined(req.body.username)) {
    res.json({ error: "Username cannot be empty" });
    return;
  } else if (StringEmptyOrUndefined(req.body.password)) {
    res.json({ error: "Password cannot be empty" });
    return;
  }

  // Create our new user.
  const newUser = { username: req.body.username, password: req.body.password };
  UserModel.create(newUser)
    .then(() => res.json({ redirect: "/login" }))

    // Log the error with appropriate response.
    .catch(err => {
      console.log(err);

      if (err.code === 11000) {
        res.json({ error: "User already exists" });
        return;
      } else {
        res.json({ error: "An error occured" });
      }
    });
};

/**
 *  A middleware method for PATCH '/user' that edits the user
 *  account.
 */
exports.editUser = function (req, res) {
  // Validate
  if (StringEmptyOrUndefined(req.body.username)) {
    req.json({ error: "Cannot have empty fields" });
    return;
  } else if (StringEmptyOrUndefined(req.body.password)) {
    req.json({ error: "Cannot have empty fields" });
    return;
  }

  // Edit the user
  const user = {
    _id: req.session.user._id,
    username: req.body.username,
    password: req.body.password,
  };

  UserModel.edit(user)
    .then(() => {
      // Update our session with the new username.
      req.session.user.username = user.username;

      // Send the new username back to the client.
      res.json({ username: user.username });
    })
    .catch(err => {
      console.log(err);
      res.json({ error: "An error occured" });
    });
};

/**
 *  A middleware method for DELETE '/user' that deletes the user
 *  account.
 */
exports.deleteUser = function (req, res) {
  const _id = req.session.user._id;

  // Delete the account.
  UserModel.delete(_id)
    .then(() => res.send({ redirect: "/login" }))
    .catch(err => {
      console.log(err);
      res.json({ error: "An error occured" });
    });
};
