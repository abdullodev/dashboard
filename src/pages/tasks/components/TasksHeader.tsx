import { Button, Typography } from "antd";
import { TaskHeaderStyle } from "./TaskHeader.style";
import { CodeOutlined } from "@ant-design/icons";
import React from "react";

interface ITaskHeader {
  setStudent?: (student: boolean) => void;
  student?: boolean;
}
const TasksHeader: React.FC<ITaskHeader> = ({ setStudent, student }) => {
  return (
    <TaskHeaderStyle>
      <Typography style={{ fontSize: "24px", fontWeight: 700 }}>
        Mijoz Sahifasi
      </Typography>

      <Button
        type="primary"
        icon={<CodeOutlined />}
        onClick={() => setStudent?.(!student)}
      >
        Vazifalar
      </Button>
    </TaskHeaderStyle>
  );
};

export default TasksHeader;
