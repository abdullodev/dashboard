import { CustomInput, CustomSelect, CustomTable, CustomTabs } from "components";
import React, { useState } from "react";
import { EmployeeStyle } from "./Employee.style";
import { Button, Card, Col, Row, Space } from "antd";
import Typography from "antd/es/typography/Typography";

const Employee = () => {
  const [filter, setFilter] = useState<boolean>(false);
  return (
    <EmployeeStyle direction="vertical" size={16}>
      <CustomTabs />
      <Row gutter={[16, 16]}>
        <Col xs={24} md={filter ? 16 : 24}>
          <CustomTable setFilter={setFilter} filter={filter} />
        </Col>
        {filter && (
          <Col xs={24} md={8}>
            <Card>
              <Typography style={{ fontSize: "20px", fontWeight: "700" }}>
                Active Students
              </Typography>
              <Space direction="vertical" style={{ width: "100%" }}>
                <CustomInput
                  name="name"
                  label="Your name"
                  props={{ placeholder: "John Doe" }}
                />
                <CustomSelect placeholder="John Doe" label="Your name" />
                <CustomSelect placeholder="John Doe" label="Your name" />
                <Space style={{ width: "100%" }}>
                  <CustomSelect placeholder="John Doe" label="Your name" />
                  <CustomSelect placeholder="John Doe" label="Your name" />
                </Space>
                <Space style={{ width: "100%" }}>
                  <Button
                    style={{ height: "44px" }}
                    onClick={() => setFilter(false)}
                  >
                    Filter cleaning
                  </Button>
                  <Button type="primary" style={{ height: "44px" }}>
                    Filtering
                  </Button>
                </Space>
              </Space>
            </Card>
          </Col>
        )}
      </Row>
    </EmployeeStyle>
  );
};

export default Employee;
