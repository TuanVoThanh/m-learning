import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import theme from "./theme";
// @material-ui/core
import { ThemeProvider } from "@material-ui/core";
// pages for this project
import HomePage from "./views/HomePage";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <HomePage />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
