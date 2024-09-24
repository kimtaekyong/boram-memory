import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { styled } from "styled-components";

interface TableContainerProps {
  columns: string[];
  data: Array<Record<string, any>>; // data는 객체 배열로 가정
  useActionCell?: boolean; // 비고 버튼 사용 여부를 제어하는 prop
}

const TableLayout = styled.div`
  table {
    width: 100%;
    thead {
      tr {
        border: 1px solid #e5e5e5;
        th {
          padding: 14px 0;
          font-size: 14px;
          background-color: #fafafa;
          font-weight: 500;
          color: #1f1f1f;
          width: 3%;
        }
      }
    }
    tbody {
      tr {
        border: 1px solid #e5e5e5;
        td {
          padding: 14px 0;
          text-align: center;
        }
      }
    }
  }
`;

const TableContainer: React.FC<TableContainerProps> = ({ columns, data, useActionCell = true }) => {
  return (
    <TableLayout>
      <table>
        <TableHeader columns={columns} />
        <tbody>
          {data.map((rowData, index) => (
            <TableRow key={index} rowData={rowData} useActionCell={useActionCell} />
          ))}
        </tbody>
      </table>
    </TableLayout>
  );
};

export default TableContainer;
