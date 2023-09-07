import { Input } from "antd";
import React from "react";
import { CustomPasswordStyle } from "./CustomPassword.style";
import { CloseOutlined } from "@ant-design/icons";

interface IPassword {
  name: string;
  rules?: { value: boolean; message: string };
  label?: string;
  icon?: React.ReactElement;
  props?: any;
  error?: any;
}
const CustomPassword: React.FC<IPassword> = ({
  name,
  label,
  props,
  icon,
  rules,
  error,
}) => {
  return (
    <CustomPasswordStyle>
      <label htmlFor={name}>
        {label} {rules?.value && <span>*</span>}
      </label>
      <Input.Password
        {...props}
        id={name}
        prefix={icon}
        allowClear={{
          clearIcon: <CloseOutlined style={{ fontSize: "18px" }} />,
        }}
      />
      {error && <p className="error">{rules?.message}</p>}
    </CustomPasswordStyle>
  );
};

export default CustomPassword;
