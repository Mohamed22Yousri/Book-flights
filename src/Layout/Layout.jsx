import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

function Layout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Dashboard />
      <div style={{ flex: 1, padding: "1rem" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
