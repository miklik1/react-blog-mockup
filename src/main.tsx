import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { MyContextProvider } from "./store/store.tsx";

import App from "./App.tsx";

import "./index.scss";
import './assets/fonts/PPHatton-Medium.otf';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyContextProvider>
        <App />
      </MyContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
