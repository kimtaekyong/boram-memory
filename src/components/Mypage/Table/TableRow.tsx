import React from "react";
import TableCell from "./TableCell";

interface TableRowProps {
  rowData: Record<string, any>; // rowData는 객체로 가정
  useActionCell?: boolean; // 비고 열에 버튼을 사용할지 여부
}

const TableRow: React.FC<TableRowProps> = ({ rowData, useActionCell = true }) => {
  const handleButtonClick = () => {
    alert(`${rowData.deadName}의 비고 버튼 클릭됨`);
  };

  return (
    <tr>
      {Object.keys(rowData).map((key, id) => (
        <TableCell key={id} cellData={rowData[key]} />
      ))}
      {useActionCell && <TableCell cellData={null} isActionCell={useActionCell} onButtonClick={handleButtonClick} />}
    </tr>
  );
};

export default TableRow;
