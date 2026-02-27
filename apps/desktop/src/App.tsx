import React from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./Home/Home";

import "./global.css";

const root = createRoot(document.body);
root.render(<Home />);
