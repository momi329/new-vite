import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import SearchPage from "./page";
import store from "./store";
import "./styles.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <SearchPage />
    </Provider>
  </StrictMode>
);
