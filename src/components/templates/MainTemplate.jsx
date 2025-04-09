import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";

export const MainTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
