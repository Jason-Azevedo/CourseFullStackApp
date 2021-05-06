function Authenticate(req, res, next) {
  if (
    req.session.isLoggedIn === false ||
    req.session.isLoggedIn === undefined
  ) {
    res.json({ redirect: "/login" });
    return;
  }

  next();
}

exports.AuthHandler = Authenticate;
