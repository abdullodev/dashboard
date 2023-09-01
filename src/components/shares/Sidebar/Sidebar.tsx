import React, { useState } from "react";
import Logo from "../../assets/logoo.png";
import { BOTTOMITEMS, ITEMS } from "./Sidebar.constants";
import { SidebarStyled } from "./Sidebar.style";

import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [nav, setNav] = useState<string>(
    localStorage.getItem("item") || "/document"
  );
  const navigate = useNavigate();
  const location = useLocation();
  const NavigateFn = (e: any) => {
    setNav(e.key);
    localStorage.setItem("item", e.key);
    if (location !== e.key) {
      navigate(e.key);
    }
  };

  return (
    <SidebarStyled>
      <header>
        <img src={Logo} alt="logo" /> <h2>Dashbord</h2>
      </header>
      <main>
        <div className="main_top">
          <div className="sidebar_title">Main menu</div>

          <Menu
            mode="inline"
            onClick={NavigateFn}
            defaultSelectedKeys={[nav]}
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
