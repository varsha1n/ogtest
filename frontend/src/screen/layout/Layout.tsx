import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
