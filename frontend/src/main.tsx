/* Several app dependencies. */

// Bootstrap with custom theme.
import "./styles/main.min.css";
// Bootstrap js with JQuery (TODO? Migrate to React Bootstrap)
import "bootstrap/dist/js/bootstrap.js";
// Bootstrap Icons.
import "bootstrap-icons/font/bootstrap-icons.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
