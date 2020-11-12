import React from "react";
import ReactDOM from "react-dom";

// pages for this project
import HomePage from "./views/HomePage";
import SignInPage from "./views/SignInPage";
import SignUpPage from "./views/SignUpPage";
import CheckOutPage from "./views/CheckOutPage";

ReactDOM.render(
  <HomePage />,
  // <SignUpPage />,
  // <SignInPage />,
  // <CheckOutPage />,
  document.getElementById("root"));
