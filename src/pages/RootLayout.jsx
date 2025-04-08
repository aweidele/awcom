import { Outlet } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
export const RootLayout = () => {
  return (
    <>
      <Footer />
      <header>Header</header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
