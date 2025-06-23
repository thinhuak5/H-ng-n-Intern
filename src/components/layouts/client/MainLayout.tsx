import HeaderClient from "./Header";
import FooterCLient from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col justify-between">
      <HeaderClient />
      <main className="flex-1">
        <Outlet />
      </main>
      <FooterCLient />
    </div>
  );
};

export default MainLayout;
