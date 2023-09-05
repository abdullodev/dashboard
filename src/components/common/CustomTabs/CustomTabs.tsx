import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Space, Tabs } from "antd";
import { CustomTabStyle } from "./CustomTabs.style";
import { useState } from "react";

const CustomTabs = () => {
  const [active, setActive] = useState<number>(1);
  return (
    <CustomTabStyle wrap>
      <Button
        className={active === 1 ? "active" : ""}
        onClick={() => setActive(1)}
      >
        <Space>
          All <span className="num">20</span>
        </Space>
      </Button>
      <Button
        className={active === 2 ? "active" : ""}
        onClick={() => setActive(2)}
      >
        <Space>
          Lorem ipsum <span className="num">12</span>
        </Space>
      </Button>
      <Button
        icon={<ShoppingCartOutlined />}
        className={active === 3 ? "active" : ""}
        onClick={() => setActive(3)}
      >
        <Space>
          Lorem ipsum <span className="num">12</span>
        </Space>
      </Button>
      <Button
        className={active === 4 ? "active" : ""}
        onClick={() => setActive(4)}
      >
        <Space>
          Lorem ipsum <span className="num">12</span>
        </Space>
      </Button>
    </CustomTabStyle>
  );
};

export default CustomTabs;
