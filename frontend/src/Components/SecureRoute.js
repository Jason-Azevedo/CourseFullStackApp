import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function SecureRoute({path, exact, isAuthenticated, redirectPath="/login", children}) {
  const secureRoute = isAuthenticated 
        ? <Route path={path} exact={exact}>{children}</Route>
        : <Redirect to={redirectPath} />

  return secureRoute;
}
