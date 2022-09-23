import React from "react";
import { createRoot } from "react-dom/client";
import ShoppingCart from "./shoppingCart";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<ShoppingCart />);
