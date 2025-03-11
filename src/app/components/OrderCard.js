import Link from "next/link";
import {
  ArrowUturnLeftIcon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function OrderCard({
  id,
  date,
  price,
  status,
  phone = "314 004 540 (po-pá 8:00–16:00)",
}) {
  return (
    <div className="bg-white p-2 xs:p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col xs:flex-row justify-between items-baseline">
        <div className="w-full">
          <div className="flex flex-col xs:flex-row justify-between items-baseline">
            <h1 className="text-lg sm:text-base font-semibold text-gray-900">
              Číslo objednávky: {id}
            </h1>
            <div className="x-badge muted rounded-sm accent-success">
              {status}
            </div>
          </div>
          {/* Photo Icons */}
          <div className="flex space-x-1 xs:space-x-2 mt-1 xs:mt-2 sm:mt-3 mb-2 xs:mb-3 sm:mb-6">
            <div className="rounded-lg p-3.5 bg-gray-200">
              <PhotoIcon className="w-5 h-5 text-gray-400" />
            </div>
            <div className="rounded-lg p-3.5 bg-gray-200">
              <PhotoIcon className="w-5 h-5 text-gray-400" />
            </div>
            <div className="rounded-lg p-3.5 bg-gray-200">
              <PhotoIcon className="w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between items-baseline mb-2 xs:mb-3 sm:mb-6 text-sm">
            <div>
              <p className="mt-1">
                Datum objednávky: <span className="text-gray-500">{date}</span>
              </p>
              <p>
                Cena celkem:{" "}
                <span className="text-gray-500 text-sm">{price}</span>
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-end mt-4">
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="text-sm text-primary"
                aria-label="Zavolat na podporu"
              >
                Potřebujete poradit?
              </a>
              <p className="font-semibold text-sm">{phone}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center mt-1 xs:mt-2 sm:mt-4 space-y-1 xs:space-y-0">
        <Link href={`/objednavka/${id}`}>
          <button
            className="x-button h-auto px-4 xs:px-6 sm:px-12 py-1 xs:py-2 rounded-lg text-xs md:text-base"
            aria-label={`Zobrazit detail objednávky ${id}`}
          >
            Detail
          </button>
        </Link>
        <div className="flex flex-row mt-3 sm:space-x-4">
          <button
            className="flex items-center text-sm hover:text-gray-800"
            aria-label="Zopakovat objednávku"
          >
            Zopakovat
            <ArrowUturnLeftIcon className="w-2 xs:w-3 sm:w-4 h-2 xs:h-3 sm:h-4 mr-0.5 xs:ml-1" />
          </button>
          <button
            className="flex items-center text-sm hover:text-gray-800"
            aria-label="Stornovat objednávku"
          >
            Stornovat
            <XMarkIcon className="w-2 xs:w-3 sm:w-4 h-2 xs:h-3 sm:h-4 mr-0.5 xs:ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
