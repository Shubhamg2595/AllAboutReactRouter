import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Expenses from "./components/Expenses";
import Invoices from "./components/Invoices";

export default function AppRoutes() {
  return (
    <>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="expenses" element={<Expenses />} />
        </Routes>
    </>
  );
}
