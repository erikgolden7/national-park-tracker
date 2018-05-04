import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.css";
import App from "./components/App";
import Nav from "./components/Nav/Nav";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

ReactDOM.render(
  <MuiThemeProvider>
    <Router>
      <div>
        <Nav />
        <App />
      </div>
    </Router>
  </MuiThemeProvider>,

  document.getElementById("root")
);
