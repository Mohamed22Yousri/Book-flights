import { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { FaCalendarCheck, FaHome } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

function Dashboard() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <div style={{ position:"sticky", top:"0", right:"0", alignSelf:"flex-start"  }}>
        <Sidebar
          collapsed={collapsed}
          style={{
            height: "100vh",
            color: "white",
          }}
        >
          <Menu style={{ fontSize: "1rem", fontWeight: "bold" }}>
            <div style={{ textAlign: "end" }}>
              <span
                style={{ cursor: "pointer", fontSize: "1.5rem" }}
                onClick={() => setCollapsed(!collapsed)}
              >
                {collapsed ? (
                  <BsArrowLeftSquareFill />
                ) : (
                  <BsArrowRightSquareFill />
                )}
              </span>
            </div>
            <MenuItem
              component={<Link to="/booking" />}
              icon={<FaCalendarCheck />}
            >
              {" "}
              حجز رحله{" "}
            </MenuItem>
            <MenuItem
              component={<Link to="/Lists" />}
              icon={<GiCommercialAirplane />}
            >
              {" "}
              الرحلات{" "}
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}

export default Dashboard;
