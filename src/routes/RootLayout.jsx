import { Outlet } from "react-router-dom";
import MainHeader from "../component/MainHeader";
function RootLayout() {
  return (
    <div className="post-list">
      <MainHeader />
      <Outlet />
    </div>
  );
}

export default RootLayout;
