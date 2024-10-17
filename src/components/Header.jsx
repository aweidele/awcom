import { useContext } from "react";
import { ContentContext } from "./ContentContext";

import { Logo } from "./Logo";
import { Menu } from "./Menu";

export function Header() {
  const { menuOpen } = useContext(ContentContext);
  const lightLogo = menuOpen ? "light" : null;

  return (
    <header className="w-full fixed top-0 left-0 z-20">
      <div className="max-w-c px-5 pt-2.5 lg:pt-16 m-auto flex justify-between">
        <Logo background={lightLogo} className="w-logo-m lg:w-logo h-logo-m lg:h-logo relative z-20" />
        <Menu />
      </div>
    </header>
  );
}
