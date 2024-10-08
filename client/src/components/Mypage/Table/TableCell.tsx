import React from "react";
import InfoIcon from "@mui/icons-material/Info";

interface TableCellProps {
  cellData: any; // cellData는 any로 정의
  isActionCell?: boolean; // 비고 열인지 여부를 판별하는 prop 추가
  onButtonClick?: () => void; // 버튼 클릭 핸들러 추가
}

const TableCell: React.FC<TableCellProps> = ({
  cellData,
  isActionCell = false, // 기본값 false로 설정
  onButtonClick = () => {}, // 기본 빈 함수 설정
}) => {
  return (
    <td>
      {isActionCell ? (
        <button
          style={{
            cursor: "pointer",
            border: "none",
            background: "none",
            padding: "0",
          }}
          onClick={onButtonClick}
          aria-label="More Info" // 접근성 속성 추가
        >
          <InfoIcon
            sx={{
              color: "rgba(31,31,31,0.25)",
            }}
          />
        </button> // 버튼 추가
      ) : (
        cellData
      )}
    </td>
  );
};

export default TableCell;
