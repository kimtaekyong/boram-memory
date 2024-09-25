import React from "react";
import TableContainer from "../Table/TableContainer";

const defaultColumns = ["추모관 명 (고인명)", "별세일시", "관리자 (상주)", "관리자 (상주) 연락처", "상태", "비고"];

const simplifiedColumns = ["추모관 명 (고인명)", "별세일시", "관리자 (상주)", "관리자 (상주) 연락처", "상태"];

const data = [
  {
    deadName: "홍길동",
    deadDay: "YYYY-MM-DD",
    manager: "홍길동",
    managerNumber: "000-0000-0000",
    status: "관리가능",
  },
  {
    deadName: "김철수",
    deadDay: "YYYY-MM-DD",
    manager: "김철수",
    managerNumber: "000-0000-0000",
    status: "관리불가능",
  },
];

interface ActivityProps {
  useActionCell?: boolean; // 버튼 사용 여부 제어
  showNotesColumn?: boolean; // 비고 컬럼 표시 여부
}

const Activity: React.FC<ActivityProps> = ({ useActionCell = true, showNotesColumn = true }) => {
  const columns = showNotesColumn ? defaultColumns : simplifiedColumns;

  return <TableContainer columns={columns} data={data} useActionCell={useActionCell} />;
};

export default Activity;
