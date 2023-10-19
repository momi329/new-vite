import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";

import "./styles.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <p className="p-2">Hello</p>
  </StrictMode>
);
