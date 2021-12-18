import React from 'react';
import { useParams } from 'react-router-dom';
import { getInvoiceByInvoiceNumber } from './Invoices';


export default function Invoice() {
    const params = useParams();
    let invoice = getInvoiceByInvoiceNumber(parseInt(params.invoiceId, 10));

    return (
        <main style={{ padding: "1rem" }}>
          <h2>Total Due: {invoice.amount}</h2>
          <p>
            {invoice.name}: {invoice.number}
          </p>
          <p>Due Date: {invoice.due}</p>
        </main>
      );
}

// Note that we used parseInt around the param. It's very common for your data lookups to use a number type, but URL params are always string.