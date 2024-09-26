import React from "react";
import TableCell from "./TableCell";

interface TableRowProps {
  rowData: Record<string, any>;
  useActionCell?: boolean;
  useCheckbox?: boolean; // 체크박스 사용 여부
  onSelect?: () => void; // 개별 행 선택 핸들러
  isSelected?: boolean; // 선택 상태
}

const TableRow: React.FC<TableRowProps> = ({
  rowData,
  useActionCell,
  useCheckbox = false,
  onSelect,
  isSelected = false,
}) => {
  const handleButtonClick = () => {
    alert(`${rowData.DeadName}의 비고 버튼 클릭됨`); // DeadName에 맞게 대소문자 수정
  };

  return (
    <tr>
      {useCheckbox && (
        <td style={{ width: "1%" }}>
          <input type="checkbox" checked={isSelected} onChange={onSelect} /> {/* 체크박스 추가 */}
        </td>
      )}
      {Object.entries(rowData).map(([key, value]) => (
        <td style={{ width: "5%" }} key={`${rowData.id}-${key}`}>
          {value}
        </td>
      ))}
      {useActionCell && <TableCell cellData={null} isActionCell={useActionCell} onButtonClick={handleButtonClick} />}
    </tr>
  );
};

export default TableRow;
