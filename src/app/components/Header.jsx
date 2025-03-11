"use client";

import { useTitle } from "@/app/components/TitleProvider";

export default function Header() {
  const { title } = useTitle();
  return (
    <header className="py-8">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
    </header>
  );
}
