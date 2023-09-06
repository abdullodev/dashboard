import { Space } from "antd";
import { styled } from "styled-components";

export const TasksStyle = styled(Space)`
  width: 100%;
  .active_boxes {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 24px;
  }
`;

export const ActiveStudentStyle = styled(Space)`
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
  gap: 16px;
`;
