import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Map from "./pages/Map";
import "./styles.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/map" element={<Map />}></Route>
    </Routes>
  </BrowserRouter>
);
