import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./tailwind.css";
import { RouterProvider } from "react-router-dom";
import Router from "./router/index.tsx";
import { Provider } from "react-redux";
import Store from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>
);

setInterval(() => {}, 1000);
