
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { AssignmentProvider } from "./context/AssignmentContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AssignmentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AssignmentProvider>
  </React.StrictMode>
);
