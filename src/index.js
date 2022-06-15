import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {makeServer} from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import {
  NotesProvider,
  ThemeProvider
} from "./context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <NotesProvider>
          <ThemeProvider>
              <App />
          </ThemeProvider>
        </NotesProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
