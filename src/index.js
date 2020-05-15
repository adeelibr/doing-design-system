import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Material-UI Components
import { ThemeProvider, CssBaseline } from "@material-ui/core";
// Components
import Theme from './components/Theme';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
