import React from "react";
import AppRouter from "./AppRouter";
import {  Routes, Route } from "react-router-dom";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/*" element={<AppRouter />}/>
    </Routes>
  );
}
