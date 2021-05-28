import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Settings from "./Pages/Settings";
import SecureRoute from "./Components/SecureRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { UserContext } from "./Context/UserContext";
import "./Styles/main.scss";

function App() {
  // The username of the current logged in user
  const [userContext, setUserContext] = useState("");
  const updateContext = username => setUserContext(username);

  // Check if the user is logged in when the app first loads
  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username !== null) {
      updateContext(username);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ username: userContext, updateUsername: updateContext }}
    >
      <Router>
        <Switch>
          <SecureRoute path="/" exact={true}>
            <Home />
          </SecureRoute>
          <SecureRoute path="/settings" exact={true}>
            <Settings />
          </SecureRoute>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
