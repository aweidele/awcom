import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { HeaderContext } from "../layout/HeaderContext";
import { navigation } from "../../content/content";

export const Menu = () => {
  const { menuOpen, setMenuOpen } = useContext(HeaderContext);
  const handleMenuToggle = () => {
    setMenuOpen((isOpen) => !isOpen);
  };
  return (
    <div>
      <button onClick={handleMenuToggle} className={`menu-button relative z-20 w-[32px] desktopXl:w-[49px] h-full ${menuOpen ? "before:translate-y-0 before:rotate-45 after:translate-y-0 after:-rotate-45" : ""}`}>
        <span className={`${menuOpen ? "opacity-0" : ""}`}></span>
        <span className="sr-only">Menu</span>
      </button>
      <div className={`absolute z-0 w-full h-screen top-0 left-0 bg-p2-menu text-white flex justify-center items-center text-center duration-300${!menuOpen ? " translate-x-full" : ""}`}>
        <ul>
          {navigation.map((nav) => (
            <li key={nav.url}>
              <NavLink to={nav.url} className="py-4 block w-full" onClick={() => setMenuOpen(false)}>
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
