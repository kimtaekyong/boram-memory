import React from "react";
import { styled } from "styled-components";

// <th> 태그 스타일링
const StyledTh = styled.th<{ width?: string }>`
  padding: 14px 0;
  font-size: 14px;
  background-color: #fafafa;
  font-weight: 500;
  color: #1f1f1f;
  text-align: center;
  width: ${({ width }) => (width ? width : "auto")}; /* 넓이를 props로 받음 */
`;

interface TableHeaderProps {
  columns: string[];
  useCheckbox?: boolean; // 체크박스 사용 여부
  onSelectAll?: (e: React.ChangeEvent<HTMLInputElement>) => void; // 전체 선택 핸들러
  isAllSelected?: boolean; // 전체 선택 상태
}

const TableHeader: React.FC<TableHeaderProps> = ({
  columns,
  useCheckbox = false,
  onSelectAll,
  isAllSelected = false,
}) => {
  return (
    <thead>
      <tr>
        {useCheckbox && (
          <StyledTh width="5%">
            <input
              type="checkbox"
              onChange={onSelectAll}
              checked={isAllSelected} // 전체 선택 상태 반영
            />
          </StyledTh>
        )}
        {columns.map((column, id) => (
          <StyledTh key={id} width="10%">
            {column}
          </StyledTh>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
