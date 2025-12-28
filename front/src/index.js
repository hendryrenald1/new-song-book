import React from "react";
import { createRoot } from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
