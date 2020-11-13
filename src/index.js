import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages for this project
import HomePage from "./views/HomePage";
import SignInPage from "./views/SignInPage";
import SignUpPage from "./views/SignUpPage";
import CheckOutPage from "./views/CheckOutPage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/signin">
          <SignInPage />
        </Route>
        <Route path="/checkout">
          <CheckOutPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,

  document.getElementById("root")
);
