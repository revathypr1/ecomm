import React, { useState, Suspense } from "react";
import styled from "styled-components";

// components

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Homepage from "../../screen/Homepage";
import Fullpage from "../../screen/Fullpage";
import AddtoCart from "../../screen/AddtoCart";
import Header from "../../include/Header";
import Spotlight from "../../screen/Spotlight";

export const GetContext = React.createContext();
function AppRouter() {
  const [items, setItems] = useState([]);
  return (
    <GetContext.Provider value={{ items, setItems }}>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<Spotlight />} />
        <Route path="/product" element={<Homepage />} />
        <Route path="/product/:id" element={<Fullpage />} />
        <Route path="/addtocart" element={<AddtoCart />} />
      </Routes>
    </GetContext.Provider>
  );
}

export default AppRouter;
