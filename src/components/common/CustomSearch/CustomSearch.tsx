import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

const CustomSearch = () => {
  return <Input placeholder="Search By Name" suffix={<SearchOutlined />} />;
};

export default CustomSearch;
