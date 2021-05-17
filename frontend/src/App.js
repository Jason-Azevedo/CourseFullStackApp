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
  const [context, setContext] = useState({
    isLoggedIn: false,
    username: "",
  });

  // Simple method for updating context, keeping code simple..
  const updateContext = (isLoggedIn, username) => {
    setContext({
      isLoggedIn: isLoggedIn,
      username: username,
    });
  };

  useEffect(() => {
    // Check if the user is logged in
    // If they were, update the global values!
    const username = localStorage.getItem("username");
    if (username !== null) {
      updateContext(true, username);
    }
  }, []);

  return (
    <UserContext.Provider value={{ context: context, update: updateContext }}>
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
