const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("This is from the user page!!");
});

router.get("/login", (req, res) => {
  // Verify user credentials in body
  // if successful return their logged in state
  // ie the username and that they are logged in
  // else deny it with the following errors:
  // incorrect credentials
  // user doesn't exist
});

router.get("/logout", (req, res) => {
  // Sign the user out!
});

const createMethod = (req, res) => {
  // create the new user and redirect them to the login page
};
const updateMethod = (req, res) => {
  // update the user if they are logged in and it is them (no session jacking)
};
const deleteMethod = (req, res) => {
  // delete the user if they are logged in and no session jacking
};

router.route("/").post(createMethod).patch(updateMethod).delete(deleteMethod);

module.exports = router;
