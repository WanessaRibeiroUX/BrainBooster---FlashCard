"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface HeaderContextType {
  isHeaderVisible: boolean;
  setHeaderVisible: (visible: boolean) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const setHeaderVisible = (visible: boolean) => {
    setIsHeaderVisible(visible);
  };

  return (
    <HeaderContext.Provider value={{ isHeaderVisible, setHeaderVisible }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeader() {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error("useHeader must be used within a HeaderProvider");
  }
  return context;
}
