import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import CustomTableHeader from "./components/CustomTableHeader";
import { CustomTableStyle } from "./CustomTable.style";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
interface ICustomTable {
  setFilter?: (filter: boolean) => void;
  filter?: boolean;
}
const CustomTable: React.FC<ICustomTable> = ({ setFilter, filter }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <CustomTableStyle>
      <CustomTableHeader setFilter={setFilter} filter={filter} />
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </CustomTableStyle>
  );
};

export default CustomTable;
