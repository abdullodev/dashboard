import { Select, SelectProps } from "antd";
import { CustomSelectStyle } from "./CustomSelect.style";

const options: SelectProps["options"] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

interface ISearch {
  placeholder?: string;
  label?: string;
}
const CustomSelect: React.FC<ISearch> = ({ placeholder, label }) => {
  return (
    <CustomSelectStyle>
      <label>{label}</label>
      <Select defaultValue={placeholder} allowClear options={options} />
    </CustomSelectStyle>
  );
};

export default CustomSelect;
