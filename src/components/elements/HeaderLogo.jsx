import { useContext } from "react";
import { Logo } from "./Logo";
import { NavLink } from "react-router-dom";
import { HeaderContext } from "../layout/HeaderContext";

export const HeaderLogo = () => {
  const { menuOpen, setMenuOpen } = useContext(HeaderContext);
  return (
    <NavLink to="/" onClick={() => setMenuOpen(false)}>
      <Logo background={menuOpen ? "light" : null} className="w-logo-m desktopXl:w-logo h-logo-m desktopXl:h-logo relative z-20" />
      <span className="sr-only">Home</span>
    </NavLink>
  );
};
