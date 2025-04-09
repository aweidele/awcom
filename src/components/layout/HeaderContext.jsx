import { createContext, useState } from "react";

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return <HeaderContext.Provider value={{ menuOpen, setMenuOpen }}>{children}</HeaderContext.Provider>;
};
