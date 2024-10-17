import { useContext } from "react";
import { ContentContext } from "./ContentContext";
import { formatSectionName } from "../utils/formatSectionName";

export function Menu() {
  const { sections, menuOpen, setMenuOpen } = useContext(ContentContext);
  function handleMenuOpen(isOpen) {
    console.log("?");
    setMenuOpen((isOpen) => !isOpen);
  }

  function closeMenu(isOpen) {
    setMenuOpen((isOpen) => false);
  }
  return (
    <div>
      <button onClick={handleMenuOpen} className={`menu-button relative z-10 w-[32px] lg:w-[49px] h-full ${menuOpen ? "before:translate-y-0 before:rotate-45 after:translate-y-0 after:-rotate-45" : ""}`}>
        <span class={`${menuOpen ? "opacity-0" : ""}`}></span>
        <span class="sr-only">Menu</span>
      </button>
      <div className={`absolute z-0 w-full h-screen top-0 left-0 bg-p2-menu text-white flex justify-center items-center duration-300${!menuOpen ? " translate-x-full" : ""}`}>
        <ul>
          {sections.map((section, i) => (
            <li key={`menu-item-${i}`}>
              <a href={`#${formatSectionName(section.title, i)}`} className="py-4 block" onClick={closeMenu}>
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
