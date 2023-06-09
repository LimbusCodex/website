import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "@/providers/app";
import App from "./App";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);