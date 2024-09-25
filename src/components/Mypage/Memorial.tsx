"use client";

import React from "react";
import TableContainer from "./Table/TableContainer";

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

  return (
    <>
      <TableContainer columns={columns} data={data} useActionCell={false} />
    </>
  );
};

export default Memorial;
