"use client";

import { useContext, useEffect, useState } from "react";
import FormInput from "../components/FormInput";
import {
  InformationCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { TitleContext } from "@/app/components/TitleProvider";

export default function AccountSettings() {
  const [formData, setFormData] = useState({
    name: "David",
    surname: "",
    email: "david.fiala@@newlogic.cz",
    phonePrefix: "+420 ",
    phone: "",
    companyName: "",
    companyId: "",
    vatId: "",
  });

  const [formFactureData, setFormFactureData] = useState({
    name: "",
    surname: "",
    comapanyName: "",
    ic: "",
    dic: "",
    street: "",
    city: "",
    psc: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFactureChange = (e) => {
    const { name, value } = e.target;
    setFormFactureData({ ...formFactureData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle("Nastavení účtu");
  }, []);

  return (
    <div className="bg-white ml-8 p-2 xs:p-4 sm:p-6 font-semibold text-lg rounded-xl shadow-md">
      <h1 className="x-title-lg mb-6">Kontaktní údaje</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <FormInput
            label="Jméno"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <FormInput
            label="Příjmení"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
          <FormInput
            label="Telefon"
            id="phone"
            name="phone"
            type="tel"
            phonePrefix={formData.phonePrefix}
            value={formData.phone}
            onChange={handleChange}
          />
          <FormInput
            label="E-mail"
            id="email"
            name="email"
            type="email"
            styles={"border-1 border-red-500"}
            icon={InformationCircleIcon}
            value={formData.email}
            onChange={handleChange}
            required
            error
          />
        </div>
        <hr className="bg-body-secondary my-8" />
        <h1 className="x-title-lg my-6">Fakturační údaje</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <FormInput
            label="Jméno"
            id="name"
            name="name"
            value={formFactureData.name}
            onChange={handleFactureChange}
            required
          />
          <FormInput
            label="Příjmení"
            id="surname"
            name="surname"
            value={formFactureData.surname}
            onChange={handleFactureChange}
            required
          />
          <FormInput
            label="Název firmy"
            id="compynyName"
            name="compynyName"
            type="text"
            value={formFactureData.companyName}
            onChange={handleFactureChange}
            required
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <FormInput
              label="IČ"
              id="ic"
              name="ic"
              type="text"
              value={formFactureData.ic}
              onChange={handleFactureChange}
              required
            />
            <FormInput
              label="DIČ"
              id="dic"
              name="dic"
              type="text"
              value={formFactureData.dic}
              onChange={handleFactureChange}
            />
          </div>
          <FormInput
            label="Ulice a číslo popisné"
            id="street"
            name="street"
            type="text"
            value={formFactureData.street}
            onChange={handleFactureChange}
          />
          <FormInput
            label="Město"
            id="city"
            name="city"
            type="text"
            value={formFactureData.city}
            onChange={handleFactureChange}
          />
          <FormInput
            label="PSČ"
            id="psc"
            name="psc"
            type="text"
            value={formFactureData.psc}
            onChange={handleFactureChange}
          />
          <FormInput
            label="Země"
            id="country"
            name="country"
            type="dropdown"
            icon={ChevronDownIcon}
            value={formFactureData.country}
            onChange={handleFactureChange}
          />
        </div>
        <hr className="bg-body-secondary my-8" />
        <div className="flex flex-col gap-3">
          <div className="x-check p-0.5 rounded-sm font-medium">
            <input type="checkbox" />
            Nesouhlasím se zasláním dotazníku spokojenosti Ověřeno zákazníky
          </div>
          <div className="x-check p-0.5 rounded-sm font-medium">
            <input type="checkbox" checked />
            Přeji si dostávat informace o novinkách a slevách nebo inspiraci
          </div>
        </div>
        <div className="flex justify-between">
          <div className="space-x-3">
            <button
              type="submit"
              className="x-button font-semibold rounded-lg py-3 px-6"
            >
              Uložit změny
            </button>
            <button
              type="submit"
              className="x-button rounded-lg py-3 px-6 font-semibold bg-transparent text-neutral-900 border-1 border-primary hover:bg-primary hover:text-white"
            >
              Uložit změny
            </button>
          </div>
          <button
            type="submit"
            className="x-button rounded-lg py-3 px-6 font-semibold bg-transparent text-red-500 border-1 border-red-500 hover:bg-red-100"
          >
            Zrušit účet
          </button>
        </div>
      </form>
    </div>
  );
}
