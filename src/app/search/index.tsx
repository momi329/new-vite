import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <Provider store={store}>
      <p className="p-2">Hello</p>
    </Provider>
  </StrictMode>
);
