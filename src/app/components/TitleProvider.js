"use client";

import { useState, useContext, createContext } from "react";

export const TitleContext = createContext(null);

export function TitleProvider({ children }) {
  const [title, setTitle] = useState("");

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
}

export function useTitle() {
  return useContext(TitleContext);
}
