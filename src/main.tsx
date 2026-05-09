import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import { Provider } from "react-redux";
import { store } from "./utils/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
);
