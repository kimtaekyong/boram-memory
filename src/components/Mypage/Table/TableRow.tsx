import React from "react";
import TableCell from "./TableCell";

interface TableRowProps {
  rowData: Record<string, any>;
  useActionCell?: boolean;
  useCheckbox?: boolean; // 체크박스 사용 여부
  onSelect?: (checked: boolean) => void; // 개별 행 선택 핸들러
  isSelected?: boolean; // 선택 상태
}

const TableRow: React.FC<TableRowProps> = ({
  rowData,
  useActionCell,
  useCheckbox = false,
  onSelect,
  isSelected = false,
}) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    // 체크 상태에 따라 콘솔에 데이터 출력
    if (checked) {
      console.log(rowData);
    } else {
    }

    // 선택 상태에 따른 부모 핸들러 호출
    if (onSelect) {
      onSelect(checked);
    }
  };

  const handleButtonClick = () => {
    alert(`${rowData.DeadName}의 비고 버튼 클릭됨`);
  };

  return (
    <tr>
      {useCheckbox && (
        <td style={{ width: "1%" }}>
          <input
            type="checkbox"
            checked={isSelected} // 부모로부터 받은 선택 상태를 반영
            onChange={handleCheckboxChange} // 선택 시 체크박스 상태 변경 처리
          />
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
