"use client";

import Link from "next/link";
import {
  ShoppingBagIcon,
  DocumentCheckIcon,
  HeartIcon,
  CircleStackIcon,
  TagIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { useContext } from "react";
import { TitleContext } from "@/app/components/TitleProvider";

export default function Sidebar() {
  const navItems = [
    {
      href: "/moje-objednavky",
      label: "Moje objednávky",
      icon: ShoppingBagIcon,
      active: true,
    },
    {
      href: "/faktury",
      label: "Faktury",
      icon: DocumentCheckIcon,
      active: false,
    },
    {
      href: "/seznam-priznani",
      label: "Seznam příznání",
      icon: HeartIcon,
      active: false,
    },
    {
      href: "/vernostni-program",
      label: "Věrnostní program",
      icon: CircleStackIcon,
      active: false,
    },
    {
      href: "/slevove-kody",
      label: "Slevové kódy",
      icon: TagIcon,
      active: false,
    },
    {
      href: "/hledane-zbozi",
      label: "Hlídané zboží",
      icon: MagnifyingGlassIcon,
      active: false,
    },
    {
      href: "/nastaveni-uctu",
      label: "Nastavení účtu",
      icon: Cog6ToothIcon,
      active: false,
    },
  ];

  const { title } = useContext(TitleContext);

  return (
    <aside className="w-[304px] py-8 px-6 flex flex-col items-center gap-3 rounded-xl bg-white shadow-md">
      <div className="flex flex-col items-center gap-2">
        <h2 className="font-medium text-xl text-black">Danil Filatov</h2>
        <p className="text-sm text-gray-500">danil.filatov@newlogic.cz</p>
      </div>
      <nav className="w-full space-y-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link key={index} href={item.href}>
              <button
                className={`x-button rounded-lg w-full font-semibold p-3 mt-3 flex items-center justify-between h-auto hover:bg-primary hover:text-white ${title === item.label ? "" : "bg-transparent text-black"}`}
              >
                <div className="flex items-center">
                  <Icon className="w-5 h-5 mr-2" />
                  <span>{item.label}</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.21967 5.21967C8.51256 4.92678 8.98744 4.92678 9.28033 5.21967L13.5303 9.46967C13.8232 9.76256 13.8232 10.2374 13.5303 10.5303L9.28033 14.7803C8.98744 15.0732 8.51256 15.0732 8.21967 14.7803C7.92678 14.4874 7.92678 14.0126 8.21967 13.7197L11.9393 10L8.21967 6.28033C7.92678 5.98744 7.92678 5.51256 8.21967 5.21967Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </Link>
          );
        })}
        <button className="x-button bg-red-100 text-red-500 rounded-lg w-full p-3 mt-3 h-auto hover:bg-red-200">
          Odhlásit se
        </button>
      </nav>
    </aside>
  );
}
