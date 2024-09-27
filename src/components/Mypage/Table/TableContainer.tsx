import React, { ChangeEvent, useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { styled } from "styled-components";

interface TableContainerProps {
  columns: string[];
  data: Array<Record<string, any>>; // data는 객체 배열로 가정
  useActionCell?: boolean; // 비고 버튼 사용 여부를 제어하는 prop
  useCheckbox?: boolean; // 체크박스 사용 여부를 제어하는 prop
  onSelectAll?: (e: ChangeEvent<HTMLInputElement>) => void;
  isAllSelected?: boolean;
  isPublished?: boolean; // 선택적 속성
  disclosure?: string; // 선택적 속성
}

const TableLayout = styled.div`
  table {
    width: 100%;
    border-radius: 4px;
    table-layout: fixed;
    thead {
      tr {
        border: 1px solid #e5e5e5;
        th {
          padding: 20px 0;
          font-size: 14px;
          background-color: #fafafa;
          font-weight: 500;
          color: #1f1f1f;
          line-height: 1;
          box-sizing: border-box;
        }
        input[type="checkbox"] {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          padding: 0px;
          border: 1px solid #e5e5e5;
        }
        input[type="checkbox"]:checked {
          background-color: #1f1f1f;
          background-image: url("/img/check_icon.svg");
          background-size: 18px;
          background-repeat: no-repeat;
          background-position: center center;
          border: 1px solid #1f1f1f;
        }
      }
    }
    tbody {
      tr {
        border: 1px solid #e5e5e5;
        td {
          padding: 20px 0;
          text-align: center;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        input[type="checkbox"] {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          padding: 0px;
          border: 1px solid #e5e5e5;
        }
        input[type="checkbox"]:checked {
          background-color: #1f1f1f;
          background-image: url("/img/check_icon.svg");
          background-size: 18px;
          background-repeat: no-repeat;
          background-position: center center;
          border: 1px solid #1f1f1f;
        }
      }
    }
  }
`;

const TableContainer: React.FC<TableContainerProps> = ({
  columns,
  data,
  useActionCell = true,
  useCheckbox = false,
}) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]); // 선택된 행의 ID 저장

  // 전체 선택 핸들러
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedRows(data.map((row) => row.id));
      console.log(data); // 전체 선택 시 모든 데이터 출력
    } else {
      setSelectedRows([]);
    }
  };

  // 개별 행 선택 핸들러
  const handleSelectRow = (id: number) => {
    setSelectedRows((prev) => (prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]));
  };

  return (
    <TableLayout>
      <table>
        <TableHeader
          columns={columns}
          useCheckbox={useCheckbox}
          onSelectAll={handleSelectAll}
          isAllSelected={selectedRows.length === data.length}
        />
        <tbody>
          {data.map((rowData) => (
            <TableRow
              key={rowData.id}
              rowData={rowData}
              useActionCell={useActionCell}
              useCheckbox={useCheckbox}
              isSelected={selectedRows.includes(rowData.id)}
              onSelect={() => handleSelectRow(rowData.id)}
            />
          ))}
        </tbody>
      </table>
    </TableLayout>
  );
};

export default TableContainer;
