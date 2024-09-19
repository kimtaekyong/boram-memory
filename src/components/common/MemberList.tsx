import React, { useState } from "react";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Memberwrap = styled.div`
  border-radius: 8px;
  margin-top: 12px;
  width: 100%;
  padding: 24px;
  background-color: #fbfbfb;
  border: 1px solid #e5e5e5;
  h2 {
    font-size: 20px;
    font-weight: 700;
    padding: 8px 0 12px 0;
  }
`;

const MemberListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  column-gap: 12px;
  flex-wrap: wrap;
`;

const MemberItem = styled.li`
  width: calc(100% / 4 - 12px);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 18px;
  padding: 24px 0;
  img {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    overflow: hidden;
  }
  h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
  }
  p {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
  }
`;

const MemberList = () => {
  const MemberData = [
    {
      id: 1,
      Deceased: "故 연＊호 님",
      Sangju: "연＊흠",
      image: "/img/memory_03.png",
    },
    {
      id: 2,
      Deceased: "故 연＊호 님",
      Sangju: "연＊흠",
      image: "/img/memory_02.png",
    },
    {
      id: 3,
      Deceased: "故 연＊호 님",
      Sangju: "연＊흠",
      image: "/img/memory_01.png",
    },
    {
      id: 4,
      Deceased: "故 연＊호 님",
      Sangju: "연＊흠",
      image: "/img/memory_01.png",
    },
    {
      id: 5,
      Deceased: "故 연＊호 님",
      Sangju: "연＊흠",
      image: "/img/memory_03.png",
    },
    {
      id: 6,
      Deceased: "故 연＊호 님",
      Sangju: "연＊흠",
      image: "/img/memory_02.png",
    },
    {
      id: 7,
      Deceased: "故 연＊호 님",
      Sangju: "연＊흠",
      image: "/img/memory_01.png",
    },
    {
      id: 8,
      Deceased: "故 연＊호 님",
      Sangju: "연＊흠",
      image: "/img/memory_01.png",
    },
    {
      id: 9,
      Deceased: "故 연＊호 님",
      Sangju: "연＊흠",
      image: "/img/memory_03.png",
    },
    {
      id: 10,
      Deceased: "故 연＊호 님",
      Sangju: "연＊흠",
      image: "/img/memory_02.png",
    },
    {
      id: 11,
      Deceased: "故 연＊호 님",
      Sangju: "연＊흠",
      image: "/img/memory_01.png",
    },
    {
      id: 12,
      Deceased: "故 연＊호 님",
      Sangju: "연＊흠",
      image: "/img/memory_01.png",
    },
    {
      id: 13,
      Deceased: "故 연＊호 님",
      Sangju: "연＊흠",
      image: "/img/memory_01.png",
    },
  ];

  const itemsPerPage = 12;
  const [page, setPage] = useState(1);

  // 페이지 변경 핸들러
  const handleChange = (event: any, value: React.SetStateAction<number>) => {
    setPage(value);
  };

  // 현재 페이지에 해당하는 데이터만 추출
  const paginatedData = MemberData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <>
      <Memberwrap>
        <h2>추모리스트</h2>
        <MemberListWrapper>
          {paginatedData.map((member) => (
            <MemberItem key={member.id}>
              <img src={member.image} alt={member.Deceased} />
              <div>
                <h3>{member.Deceased}</h3>
                <p>상주: {member.Sangju}</p>
              </div>
            </MemberItem>
          ))}
        </MemberListWrapper>
      </Memberwrap>
      <div className="flex justify-center items-center h-20">
        <Stack>
          <Pagination
            count={Math.ceil(MemberData.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
            shape="rounded"
            sx={{
              "& .Mui-selected": {
                backgroundColor: "#1976d2 !important", // 선택된 페이지 색상
                color: "#fff", // 선택된 페이지 텍스트 색상
                "&:hover": {
                  backgroundColor: "#115293", // 선택된 페이지 hover 색상
                },
              },
            }}
          />
        </Stack>
      </div>
    </>
  );
};

export default MemberList;
