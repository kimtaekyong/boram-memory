"use client";

import React from "react";
import styled from "styled-components";
import TableContainer from "./Table/TableContainer";

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
  button {
    padding: 8px 12px;
    background-color: #1f1f1f;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
  }
`;

const Memorial = () => {
  const columns = ["번호", "제목", "작성자", "관계", "고인명", "작성일"];
  const data = [
    {
      id: 1,
      title: "보고싶습니다..",
      creatName: "홍길동",
      relationship: "기타",
      DeadName: "홍＊자",
      creationDay: "YYYY-MM-DD",
    },
    {
      id: 2,
      title: "오랜만입니다..",
      creatName: "홍길동",
      relationship: "기타",
      DeadName: "홍＊자",
      creationDay: "YYYY-MM-DD",
    },
    {
      id: 3,
      title: "보고싶습니다..",
      creatName: "홍길동",
      relationship: "기타",
      DeadName: "홍＊자",
      creationDay: "YYYY-MM-DD",
    },
    {
      id: 4,
      title: "보고싶습니다..",
      creatName: "홍길동",
      relationship: "기타",
      DeadName: "홍＊자",
      creationDay: "YYYY-MM-DD",
    },
  ];

  const handleOpen = () => {
    console.log("활동관리 더 보기");
  };

  return (
    <ComponentLayout>
      <ComponentTitle>
        <h2>활동내역</h2>
        <button onClick={handleOpen}>더보기</button>
      </ComponentTitle>
      <TableContainer columns={columns} data={data} useActionCell={false} />
    </ComponentLayout>
  );
};

export default Memorial;
