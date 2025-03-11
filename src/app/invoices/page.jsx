"use client";

import InvoiceTable from "../components/InvoiceTable";
import { useContext, useEffect } from "react";
import { TitleContext } from "@/app/components/TitleProvider";

export default function Invoices() {
  const invoices = [
    {
      number: "12343678912123456178",
      invoiceNum: "12345678912349678",
      amount: "1 500 Kč",
    },
    {
      number: "123456789123145678",
      invoiceNum: "1234567812345678",
      amount: "1 500 Kč",
    },
    {
      number: "123436789123445678",
      invoiceNum: "12345678123456783",
      amount: "1 500 Kč",
    },
    {
      number: "123455675912345678",
      invoiceNum: "1134567812345678",
      amount: "1 500 Kč",
    },
    {
      number: "123456789112345678",
      invoiceNum: "1234567812345678",
      amount: "1 500 Kč",
    },
    {
      number: "1234567891012345678",
      invoiceNum: "1234567812345678",
      amount: "1 500 Kč",
    },
    {
      number: "1234567891123456780",
      invoiceNum: "1234567812345678",
      amount: "1 500 Kč",
    },
    {
      number: "1234567891223456780",
      invoiceNum: "1234567812345678",
      amount: "1 500 Kč",
    },
    {
      number: "1234567892212345678",
      invoiceNum: "1234567812345678",
      amount: "1 500 Kč",
    },
  ];

  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle("Faktury");
  }, []);

  return (
    <div>
      <InvoiceTable invoices={invoices} />
      <div className="relative flex items-center mt-6">
        <button className="x-button absolute left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg bg-primary hover:bg-white hover:text-neutral-900 text-white">
          Načíst další
        </button>
        <div className="flex-1"></div>
        <nav
          className="x-pagination invisible xl:visible"
          aria-label="pagination"
        >
          <a
            className="x-button sm square muted rounded-sm bg-white text-primary pointer-events-none"
            href="#"
            aria-current="page"
          >
            1
          </a>
          <a
            className="x-button sm square ghosted rounded-sm bg-white hover:text-primary text-neutral-900"
            href="#"
          >
            2
          </a>
          <a
            className="x-button sm square ghosted  rounded-sm bg-white hover:text-primary  text-neutral-900"
            href="#"
          >
            3
          </a>
          <a
            className="x-button sm square ghosted bg-white rounded-sm hover:text-primary text-neutral-900"
            href="#"
          >
            4
          </a>
          <a className="x-button sm square ghosted text-neutral-900">...</a>
          <a
            className="x-button sm square ghosted bg-white rounded-sm hover:text-primary  text-neutral-900"
            href="#"
          >
            30
          </a>
        </nav>
      </div>
    </div>
  );
}
