import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Dashboard from "./pages/Dashboard";
import Map from "./pages/Map";
import { store } from "./redux/store";
import "./styles.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/map" element={<Map />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
