import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import NotFoundPage from "./components/404";
import Expenses from "./components/Expenses";
import Invoice from "./components/Invoice";
import Invoices from "./components/Invoices";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="expenses" element={<Expenses />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
