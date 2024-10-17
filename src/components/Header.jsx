import { Logo } from "./Logo";

export function Header() {
  return (
    <div className="w-full fixed top-0 md:top-16 left-0 z-10">
      <div className="max-w-c px-5 py-2.5 m-auto">
        <Logo className="w-logo-m lg:w-logo h-logo-m lg:h-logo" />
      </div>
    </div>
  );
}
