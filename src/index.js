import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/app";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <BrowserRouter basename="/supermarket">
      <App />
    </BrowserRouter>
  </StrictMode>
);
