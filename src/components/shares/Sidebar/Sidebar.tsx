import React from "react";
import Logo from "../../assets/logoo.png";
import { BOTTOMITEMS, ITEMS } from "./Sidebar.constants";
import { SidebarStyled } from "./Sidebar.style";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { Menu } from "antd";

const Sidebar = () => {
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
            defaultSelectedKeys={["4 "]}
            items={ITEMS.map((item, index) => ({
              key: String(index + 1),
              icon: React.createElement(item.icon),
              label: item.label,
            }))}
          />
        </div>
        <div className="main_bottom">
          <div className="sidebar_title">Preferences</div>
          <Menu
            mode="inline"
            defaultSelectedKeys={["4 "]}
            items={BOTTOMITEMS.map((item, index) => ({
              key: String(index + 1),
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
