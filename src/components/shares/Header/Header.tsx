import { Breadcrumb, Input, Space } from "antd";
import BreadHome from "components/assets/BreadHome";
import Notif from "components/assets/Notif";
import Search from "components/assets/Search";
import USER from "../../assets/Rectangle 338.png";
import { HeaderStyle } from "./Header.style";

const Header = () => {
  return (
    <HeaderStyle>
      <div className="header_box">
        <div className="breadcramb_box">
          <Breadcrumb
            separator=">"
            items={[
              {
                href: "/",
                title: <BreadHome />,
              },
              {
                href: "/home",
                title: (
                  <>
                    <span>Document</span>
                  </>
                ),
              },
            ]}
          />
        </div>
        <div className="header_right">
          <Space size={20}>
            <Input size="large" placeholder="John Doe" prefix={<Search />} />
            <div className="notif">
              <Notif />
            </div>
            <div className="user_profile">
              <p>Abdullo Ergashkhujaev</p>
              <div className="img">
                <img src={USER} alt="user" />
              </div>
            </div>
          </Space>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
