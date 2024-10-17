import { createContext, useState } from "react";
import { sections } from "../content/content";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return <ContentContext.Provider value={{ sections, menuOpen, setMenuOpen }}>{children}</ContentContext.Provider>;
};
