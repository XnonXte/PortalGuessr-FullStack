/* 
  Import conventions for this project:
  -- Built-in library import (e.g., nodejs modules)

  -- Third-party library import

  -- First-party library import

  -- Types declaration import

  -- CSS import

  -- Misc import

  This project strictly follow the SOLID principle in the 
  making of components, utils, etc.
*/

import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";

import "./css/main.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

// ! Bootstrap's breakpoints. For development only!
// import "./css/css-breakpoints.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
