import { Logo } from "../elements/Logo";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-20">
      <div className="max-w-h px-5 pt-2.5 desktopXl:pt-16 m-auto flex justify-between">
        <NavLink to="/">
          <Logo background={null} className="w-logo-m desktopXl:w-logo h-logo-m desktopXl:h-logo relative z-20" />
          <span className="sr-only">Home</span>
        </NavLink>
      </div>
    </header>
  );
};
