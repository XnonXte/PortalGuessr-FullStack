import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";

import "./styles/css/main.min.css";
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
