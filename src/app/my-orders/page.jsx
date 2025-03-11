"use client";

import OrderCard from "../components/OrderCard";
import { useContext, useEffect } from "react";
import { TitleContext } from "../components/TitleProvider";

export default function MyOrders() {
  const orders = [
    {
      id: "2200245834",
      date: "12. 10. 2022",
      price: "1 500 Kč",
      status: "Zaplaceno",
      phone: "314 004 540 (po-pá 8:00–16:00)",
    },
    {
      id: "2200245834",
      date: "12. 10. 2022",
      price: "1 500 Kč",
      status: "Zaplaceno",
      phone: "314 004 540 (po-pá 8:00–16:00)",
    },
    {
      id: "2200245834",
      date: "12. 10. 2022",
      price: "1 500 Kč",
      status: "Zaplaceno",
      phone: "314 004 540 (po-pá 8:00–16:00)",
    },
  ];

  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle("Moje objednávky");
  }, []);

  return (
    <div className="space-y-6">
      {orders.map((order, index) => (
        <OrderCard
          key={index}
          id={order.id}
          date={order.date}
          price={order.price}
          status={order.status}
          phone={order.phone}
        />
      ))}
    </div>
  );
}
