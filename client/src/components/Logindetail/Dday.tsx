"use client";

import React from "react";
import { styled } from "styled-components";
import AddIcon from "@mui/icons-material/Add";

const Ddaydata = [
  {
    id: 1,
    title: "2월 25일 제사",
    details: "이날 제사는 조부모님 제사입니다.",
  },
  {
    id: 2,
    title: "2월 27일 가족모임",
    details: "가족모임은 할머니 댁에서 진행됩니다.",
  },
  {
    id: 3,
    title: "2월 29일 어머님 생신",
    details: "어머님 생신 축하드립니다!",
  },
];

const ComponentLayout = styled.div`
  background-color: #fff;
  border: 1px solid #e5e5e5;
  padding: 24px;
  border-radius: 8px;
`;

const ComponentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  h2 {
    font-size: 18px;
    font-weight: 700;
    color: #1f1f1f;
  }
  button {
    cursor: pointer;
    padding: 8px 14px;
    background-color: #0064ff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    column-gap: 6px;
    border-radius: 4px;
  }
`;

const ComponentTag = styled.ul`
  padding: 10px;
  display: flex;
  column-gap: 8px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  li {
    padding: 8px 20px;
    background-color: #eee;
    border-radius: 4px;
    color: #1f1f1f;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
  }
`;

const Dday = () => {
  const handleAdd = () => {
    console.log("일정추가");
  };
  //   const [selectedId, setSelectedId] = useState<number | null>(null);

  //   const handleViewDetails = (id: number) => {
  //     setSelectedId(id === selectedId ? null : id); // ID가 같으면 null로 설정해 닫기 기능 구현
  //   };
  return (
    <>
      <ComponentLayout>
        <ComponentTitle>
          <h2>기념일</h2>
          <button onClick={handleAdd}>
            새 일정
            <AddIcon sx={{ color: "fff", width: 20, height: 20 }} />
          </button>
        </ComponentTitle>
        <ComponentTag>
          {Ddaydata.map((event) => (
            <li key={event.id}>
              {event.title}
              {/* <button onClick={() => handleViewDetails(event.id)}>
                {selectedId === event.id ? "닫기" : "상세보기"}
              </button>
              {/* 선택된 ID의 항목만 세부 정보 표시 */}
              {/* {selectedId === event.id && <p>{event.details}</p>} */}
            </li>
          ))}
        </ComponentTag>
      </ComponentLayout>
    </>
  );
};

export default Dday;
