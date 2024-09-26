"use client";

import React, { ChangeEvent, useState } from "react";
import TableContainer from "../Table/TableContainer";

const defaultColumns = ["번호", "제목", "작성자", "게시여부", "관계", "고인명", "작성일"];
const simplifiedColumns = ["번호", "제목", "작성자", "관계", "고인명", "작성일"];

// 데이터 배열에 게시 여부 추가
const defaultData = [
  {
    id: 1,
    title: "보고싶습니다..보고싶습니다보고싶습니다보고싶습니다보고싶습니다",
    creatName: "홍길동",
    disclosure: "게시",
    isPublished: true,
    relationship: "기타",
    DeadName: "홍＊자",
    creationDay: "YYYY-MM-DD",
  },
  {
    id: 2,
    title: "오랜만입니다..",
    creatName: "홍길동",
    disclosure: "게시",
    isPublished: true,
    relationship: "기타",
    DeadName: "홍＊자",
    creationDay: "YYYY-MM-DD",
  },
  {
    id: 3,
    title: "보고싶습니다..",
    creatName: "홍길동",
    disclosure: "게시",
    isPublished: true,
    relationship: "기타",
    DeadName: "홍＊자",
    creationDay: "YYYY-MM-DD",
  },
  {
    id: 4,
    title: "보고싶습니다..",
    creatName: "홍길동",
    disclosure: "미게시",
    isPublished: false,
    relationship: "기타",
    DeadName: "홍＊자",
    creationDay: "YYYY-MM-DD",
  },
];
const simplifiedData = [
  {
    id: 1,
    title: "보고싶습니다..보고싶습니다보고싶습니다보고싶습니다보고싶습니다",
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

interface MemorialProps {
  useCheckbox?: boolean;
  showNotesColumn?: boolean;
}

const Memorial: React.FC<MemorialProps> = ({ useCheckbox = true, showNotesColumn = true }) => {
  // 조건에 따라 사용할 데이터를 결정
  const columns = showNotesColumn ? defaultColumns : simplifiedColumns;
  const data = showNotesColumn ? defaultData : simplifiedData;

  // Select all 상태 관리
  const [isAllSelected, setIsAllSelected] = useState(false);

  const handleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    setIsAllSelected(e.target.checked);
    // 추가적인 선택 로직...
  };

  // isPublished 속성은 화면에 렌더링되지 않도록 필터링
  const filteredData = data.map(({ isPublished, ...rest }) => rest);

  return (
    <>
      <TableContainer
        useCheckbox={useCheckbox}
        columns={columns}
        data={filteredData} // isPublished가 제외된 데이터 전달
        useActionCell={false}
        onSelectAll={handleSelectAll}
        isAllSelected={isAllSelected}
      />
    </>
  );
};

export default Memorial;
