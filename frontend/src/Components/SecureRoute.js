import React from "react";
import { Route, Redirect } from "react-router-dom";

/**
 * A secure route that can only be accessed when the user is logged in
 * @param {object} Props Should contain the path, if it is exact,
 * optional: redirect path and any children to be rendered
 * @returns A route with the supplied children or a redirect
 */
export default function SecureRoute({
  path,
  exact,
  redirectPath = "/login",
  children,
}) {
  const isLoggedIn = localStorage.getItem("username") !== null;
  const secureRoute = isLoggedIn ? (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  ) : (
    <Redirect to={redirectPath} />
  );

  return secureRoute;
}
