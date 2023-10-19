import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import "./styles.css";

export function HomePage() {
  return <p>12344444</p>;
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
