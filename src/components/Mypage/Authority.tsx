"use client";

import React, { useState } from "react";
import styled from "styled-components";
import TableContainer from "./Table/TableContainer";
import Dropdown from "../common/Drop/Dropdown";

const ComponentLayout = styled.div`
  background-color: #fff;
  border: 1px solid #e5e5e5;
  padding: 24px;
  border-radius: 8px;
  h2 {
    font-size: 18px;
    font-weight: 700;
    color: #1f1f1f;
  }
`;

const ComponentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`;

const Authority = () => {
  const columns = ["게시글", "음원설정", "알림설정", "관심설정", "비공개게시물"];
  const data = [{ contant: "30건", sound: "3건", alarm: "2건", interest: "4건", private: "2건" }];

  const options = ["홍길자", "홍길동", "홍길순"];

  const [selectedOption, setSelectedOption] = useState<string>();

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <ComponentLayout>
      <ComponentTitle>
        <h2>추모관관리</h2>
        <Dropdown options={options} onSelect={handleSelect} />
      </ComponentTitle>
      <TableContainer columns={columns} data={data} useActionCell={false} />
    </ComponentLayout>
  );
};

export default Authority;
