import React, { useState } from "react";
import TasksHeader from "../components/TasksHeader";
import { ActiveStudentStyle, TasksStyle } from "./TasksStyle";
import { CustomTabs, TableHome } from "components";
import { Card, Col, Row, Typography } from "antd";
import { ACTIVE_STUDENTS } from "./TaskContants";

const Tasks = () => {
  const [student, setStudent] = useState<boolean>(false);
  return (
    <TasksStyle direction="vertical" size={16}>
      <TasksHeader setStudent={setStudent} student={student} />
      <CustomTabs />
      <Row gutter={[16, 16]}>
        <Col xs={24} md={student ? 18 : 24}>
          <TableHome />
        </Col>
        {student && (
          <Col xs={24} md={6}>
            <Card>
              <Typography style={{ fontSize: "20px", fontWeight: "700" }}>
                Active Students
              </Typography>
              <div className="active_boxes">
                {ACTIVE_STUDENTS.map((student, index) => (
                  <ActiveStudentStyle key={index}>
                    <Typography.Text
                      style={{ fontSize: "16px", color: "#101828" }}
                    >
                      {student.order}
                    </Typography.Text>
                    <Typography.Text
                      style={{ fontSize: "16px", color: "#667085" }}
                    >
                      {student.text}
                    </Typography.Text>
                  </ActiveStudentStyle>
                ))}
              </div>
            </Card>
          </Col>
        )}
      </Row>
    </TasksStyle>
  );
};

export default Tasks;
