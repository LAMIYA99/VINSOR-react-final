import { Outlet } from "@tanstack/react-router";
import Footer from "./Footer";
import Header from "./Header";
import GlobalSpinner from "../Components/GlobalSpinner";

const Layout = () => {
  return (
    <div>
      <GlobalSpinner />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
