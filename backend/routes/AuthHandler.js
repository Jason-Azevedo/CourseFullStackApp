function requireAuth(req, res, next) {
  if (req.session.isLoggedIn) next();
  else {
    res.json({ redirect: "/login" });
    return;
  }
}

module.exports = requireAuth;
