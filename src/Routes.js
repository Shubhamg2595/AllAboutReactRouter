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
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="expenses" element={<Expenses />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

// index routes in routerv6
// Notice it has the index prop instead of a path. That's because the index route shares the path of the parent. That's the whole point--it doesn't have a path.

// Maybe you're still scratching your head. There are a few ways we try to answer the question "what is an index route?". Hopefully one of these sticks for you:

// Index routes render in the parent routes outlet at the parent route's path.
// Index routes match when a parent route matches but none of the other children match.
// Index routes are the default child route for a parent route.
// Index routes render when the user hasn't clicked one of the items in a navigation list yet.
