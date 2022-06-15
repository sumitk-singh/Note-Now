import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {makeServer} from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import {
  AuthProvider,
  NotesProvider,
  ThemeProvider,
  MobileMenuProvider,
} from "./context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <NotesProvider>
          <ThemeProvider>
            <MobileMenuProvider>
              <App />
            </MobileMenuProvider>
          </ThemeProvider>
        </NotesProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
