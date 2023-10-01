import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

// Custom bootstrap theme.
import "./css/main.min.css";

// Bootstrap icons.
import "bootstrap-icons/font/bootstrap-icons.min.css";

// ! Bootstrap's breakpoints. For development only!
// import "./css/css-breakpoints.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // We omit React's strict mode for more ease of development.
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
