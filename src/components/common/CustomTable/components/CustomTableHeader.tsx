import { Button, Col, Divider, Row, Space, Typography } from "antd";
import React from "react";
import { CustomHeaderStyle } from "./CustomHeader.style";
import CustomSearch from "components/common/CustomSearch/CustomSearch";
import { FilterOutlined, PlusOutlined } from "@ant-design/icons";
interface ICustomTableHeader {
  setFilter?: (filter: boolean) => void;
  filter?: boolean;
}

const CustomTableHeader: React.FC<ICustomTableHeader> = ({
  setFilter,
  filter,
}) => {
  return (
    <CustomHeaderStyle gutter={[16, 16]}>
      <Col xs={24} md={12}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Space align="center" wrap size={12}>
            <Typography.Text style={{ fontSize: "20px", fontWeight: 700 }}>
              Active Students
            </Typography.Text>
            <Divider orientation="center" type="vertical" />
            <Typography.Text>274 Users</Typography.Text>
            <CustomSearch />
          </Space>
        </div>
      </Col>
      <Col xs={24} md={12}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Space align="center" wrap size={12}>
            {!filter && (
              <Button
                icon={<FilterOutlined />}
                onClick={() => setFilter?.(true)}
              >
                Filter
              </Button>
            )}
            <Button icon={<PlusOutlined />} type="primary">
              Button
            </Button>
          </Space>
        </div>
      </Col>
    </CustomHeaderStyle>
  );
};

export default CustomTableHeader;
