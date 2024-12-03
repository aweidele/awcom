import { useContext } from "react";
import { ContentContext } from "./ContentContext";

import { Logo } from "./Logo";
import { Menu } from "./Menu";

export function Header() {
  const { menuOpen } = useContext(ContentContext);
  const lightLogo = menuOpen ? "light" : null;

  return (
    <header className="w-full fixed top-0 left-0 z-20">
      <div className="max-w-h px-5 pt-2.5 desktopXl:pt-16 m-auto flex justify-between">
        <Logo background={lightLogo} className="w-logo-m desktopXl:w-logo h-logo-m desktopXl:h-logo relative z-20" />
        <Menu />
      </div>
    </header>
  );
}
