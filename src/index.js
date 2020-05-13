import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Material-UI Components
import { ThemeProvider } from "@material-ui/core";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
