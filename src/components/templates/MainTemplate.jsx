import { Footer } from "../layout/Footer";

export const MainTemplate = ({ children }) => {
  return (
    <>
      <header>Header</header>
      <main>{children}</main>
      <Footer />
    </>
  );
};
