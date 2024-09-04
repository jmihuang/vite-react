import { Outlet } from "react-router-dom";
import MainHeader from "../component/MainHeader";
function RootLayout() {
  return (
    <div className="container">
      <MainHeader />
      <Outlet />
    </div>
  );
}

export default RootLayout;
