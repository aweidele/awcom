import { Outlet } from "react-router-dom";
import { MainTemplate } from "../components/templates/MainTemplate";

export const RootLayout = () => {
  return (
    <MainTemplate>
      <Outlet />
    </MainTemplate>
  );
};
