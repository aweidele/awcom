import { HeaderLogo } from "../elements/HeaderLogo";
import { Menu } from "../elements/Menu";
import { HeaderProvider } from "./HeaderContext";

export const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-20">
      <div className="max-w-h px-5 pt-2.5 desktopXl:pt-16 m-auto flex justify-between">
        <HeaderProvider>
          <HeaderLogo />
          <Menu />
        </HeaderProvider>
      </div>
    </header>
  );
};
