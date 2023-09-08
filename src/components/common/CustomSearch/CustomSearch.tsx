import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { CustomSearchStyle } from "./CustomSearch.style";

const CustomSearch = () => {
  return (
    <CustomSearchStyle>
      <Input placeholder="Search By Name" suffix={<SearchOutlined />} />
    </CustomSearchStyle>
  );
};

export default CustomSearch;
