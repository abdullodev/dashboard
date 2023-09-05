import React, { useState } from "react";
import Logo from "../../assets/logoo.png";
import { BOTTOMITEMS, ITEMS } from "./Sidebar.constants";
import { SidebarStyled } from "./Sidebar.style";

import { Menu, Typography } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [nav, setNav] = useState<string>(
    localStorage.getItem("item") || "/document"
  );
  const navigate = useNavigate();
  const location = useLocation();
  const NavigateFn = (e: any) => {
    setNav(e.key);
    console.log(e.key);
    localStorage.setItem("item", e.key);
    if (e.key === "/logout") {
      navigate("/auth");
      localStorage.clear();
    } else if (location !== e.key) {
      navigate(e.key);
    }
  };

  return (
    <SidebarStyled>
      <header>
        <img src={Logo} alt="logo" />
        <Typography style={{ fontSize: "24px" }}>Dashbord</Typography>
      </header>
      <main>
        <div className="main_top">
          <div className="sidebar_title">Main menu</div>

          <Menu
            mode="inline"
            onClick={NavigateFn}
            // defaultSelectedKeys={[nav]}
            selectedKeys={[nav]}
            items={ITEMS.map((item, index) => ({
              key: item.path,
              icon: React.createElement(item.icon),
              label: item.label,
            }))}
          />
        </div>
        <div className="main_bottom">
          <div className="sidebar_title">Preferences</div>
          <Menu
            mode="inline"
            onClick={NavigateFn}
            // defaultSelectedKeys={[nav]}
            selectedKeys={[nav]}
            items={BOTTOMITEMS.map((item, index) => ({
              key: item.path,
              icon: React.createElement(item.icon),
              label: item.label,
            }))}
          />
        </div>
      </main>
    </SidebarStyled>
  );
};

export default Sidebar;
