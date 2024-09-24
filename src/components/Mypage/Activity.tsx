import React from "react";
import styled from "styled-components";
import TableContainer from "./Table/TableContainer";

const columns = ["추모관 명 (고인명)", "별세일시", "관리자 (상주)", "관리자 (상주) 연락처", "상태", "비고"];
const data = [
  {
    id: 1,
    deadName: "홍길동",
    deadDay: "YYYY-MM-DD",
    manager: "홍길동",
    managerNumber: "000-0000-0000",
    status: "관리가능",
  },
  {
    id: 2,
    deadName: "김철수",
    deadDay: "YYYY-MM-DD",
    manager: "김철수",
    managerNumber: "000-0000-0000",
    status: "관리불가능",
  },
];

const ComponentLayout = styled.div`
  background-color: #fff;
  border: 1px solid #e5e5e5;
  padding: 24px;
  border-radius: 8px;
  h2 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 16px;
    color: #1f1f1f;
  }
`;

const Activity = () => {
  return (
    <>
      <ComponentLayout>
        <h2>권한관리</h2>
        <TableContainer columns={columns} data={data.map(({ id, ...rest }) => rest)} useActionCell={true} />
      </ComponentLayout>
    </>
  );
};

export default Activity;
