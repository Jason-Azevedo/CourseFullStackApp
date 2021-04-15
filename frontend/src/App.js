import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Settings from "./Pages/Settings";
import SecureRoute from "./Components/SecureRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Styles/main.scss";

function App() {
  return (
    <Router>
      <Switch>
        <SecureRoute path="/" exact={true} isAuthenticated={true}>
          <Home />
        </SecureRoute>
        <SecureRoute path="/settings" exact={true} isAuthenticated={true}>
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
  );
}

export default App;
