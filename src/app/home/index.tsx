import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import "./styles.css";

import { HomeLayout } from "@shared-features/home";
import navigation from "./constants/navigation";

export function HomePage() {
  return <HomeLayout title="訂房的小小世界" navigation={navigation} />;
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
