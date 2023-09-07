import { Input } from "antd";
import React from "react";
import { CustomInputStyle } from "./CustomInput.style";
import { CloseOutlined } from "@ant-design/icons";

interface IInput {
  name: string;
  label: string;
  props?: any;
  rules?: { value: boolean; message: string };
}
const CustomInput: React.FC<IInput> = ({ name, label, props, rules }) => {
  return (
    <CustomInputStyle>
      <label htmlFor={name}>
        {label} {rules?.value && <span>*</span>}
      </label>
      <Input
        {...props}
        id={name}
        allowClear={{
          clearIcon: <CloseOutlined style={{ fontSize: "18px" }} />,
        }}
      />
    </CustomInputStyle>
  );
};

export default CustomInput;
