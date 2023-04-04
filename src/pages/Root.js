import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/Header";

function RootLayout() {
  return (
    <>
      <HeaderComponent />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
