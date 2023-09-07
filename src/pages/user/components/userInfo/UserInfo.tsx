import React from "react";
import { Card, Col, Image, Row, Typography } from "antd";
import UserImg from "../../../../assets/user.png";
import { userValue } from "./UserInfo.constants";
import { UserInfoStyle } from "./UserInfo.style";

const UserInfo = () => {
  return (
    <Card>
      <Row gutter={[16, 16]}>
        <Col xs={24} xxl={7} xl={10}>
          <Image
            width={200}
            height={200}
            src={UserImg}
            style={{ background: "#F9FAFB", padding: "40px" }}
          />
        </Col>
        <Col xs={24} xxl={17} xl={14}>
          <UserInfoStyle>
            {userValue.map((user) => (
              <div className="u-info" key={user.title}>
                <Typography.Title
                  style={{ fontSize: "16px", color: "#101828" }}
                >
                  {user.title}:
                </Typography.Title>
                <Typography.Text style={{ fontSize: "16px", color: "#667085" }}>
                  {user.value}
                </Typography.Text>
              </div>
            ))}
          </UserInfoStyle>
        </Col>
      </Row>
    </Card>
  );
};

export default UserInfo;
