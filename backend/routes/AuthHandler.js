/**
 *  A middleware method for ensuring that a user is logged in,
 *  if they are next() will be called, else a json response
 *  will be sent telling them to redirect to login
 */
function requireAuth(req, res, next) {
  if (req.session.isLoggedIn) next();
  else {
    res.json({ redirect: "/login" });
    return;
  }
}

module.exports = requireAuth;
