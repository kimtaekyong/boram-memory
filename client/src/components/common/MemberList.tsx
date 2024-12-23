import React, { useState } from "react";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import MemberItem from "@/components/card/MemberItem ";

const Memberwrap = styled.div`
  padding: 60px 0 28px 0;
  .MemberList {
    text-align: center;
    color: #3c3c3c;
    margin-bottom: 28px;
  }
  h2 {
    font-size: 28px;
    font-weight: 700;
    line-height: 1.55;
    letter-spacing: -1.25px;
  }
  p {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -1px;
  }
`;

const MemberListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const MemberList = () => {
  const MemberData = [
    { id: 1, Deceased: "故 연＊호 님", Sangju: "연＊흠", image: "/img/userDummy-img.png" },
    { id: 2, Deceased: "故 홍길동 님", Sangju: "연＊흠", image: "/img/userDummy-img.png" },
    { id: 3, Deceased: "故 홍금숙 님", Sangju: "연＊흠", image: "/img/userDummy-img.png" },
    { id: 4, Deceased: "故 보람상조 님", Sangju: "연＊흠", image: "/img/userDummy-img.png" },
    { id: 5, Deceased: "故 연＊호 님", Sangju: "연＊흠", image: "/img/userDummy-img.png" },
    { id: 6, Deceased: "故 연＊호 님", Sangju: "연＊흠", image: "/img/userDummy-img.png" },
    { id: 7, Deceased: "故 연＊호 님", Sangju: "연＊흠", image: "/img/userDummy-img.png" },
    { id: 8, Deceased: "故 연＊호 님", Sangju: "연＊흠", image: "/img/userDummy-img.png" },
    { id: 9, Deceased: "故 연＊호 님", Sangju: "연＊흠", image: "/img/userDummy-img.png" },
    { id: 10, Deceased: "故 연＊호 님", Sangju: "연＊흠", image: "/img/userDummy-img.png" },
    { id: 11, Deceased: "故 연＊호 님", Sangju: "연＊흠", image: "/img/userDummy-img.png" },
    { id: 12, Deceased: "故 연＊호 님", Sangju: "연＊흠", image: "/img/userDummy-img.png" },
    { id: 13, Deceased: "故 연＊호 님", Sangju: "연＊흠", image: "/img/userDummy-img.png" },
    { id: 14, Deceased: "故 연＊호 님", Sangju: "연＊흠", image: "/img/userDummy-img.png" },
    { id: 15, Deceased: "故 연＊호 님", Sangju: "연＊흠", image: "/img/userDummy-img.png" },
    { id: 16, Deceased: "故 연＊호 님", Sangju: "연＊흠", image: "/img/userDummy-img.png" },
    { id: 17, Deceased: "故 연＊호 님", Sangju: "연＊흠", image: "/img/userDummy-img.png" },
    { id: 18, Deceased: "故 연＊호 님", Sangju: "연＊흠", image: "/img/userDummy-img.png" },
    { id: 19, Deceased: "故 연＊호 님", Sangju: "연＊흠", image: "/img/userDummy-img.png" },
    { id: 20, Deceased: "故 연＊호 님", Sangju: "연＊흠", image: "/img/userDummy-img.png" },
  ];

  const itemsPerPage = 12;
  const [page, setPage] = useState(1);

  // 페이지 변경 핸들러
  const handleChange = (_event: any, value: React.SetStateAction<number>) => {
    setPage(value);
  };

  // 현재 페이지에 해당하는 데이터만 추출
  const paginatedData = MemberData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <>
      <Memberwrap>
        <div className="MemberList">
          <h2>삼가 고인의 명복을 빕니다.</h2>
          <p>추억이 머무는 곳, 그리움이 이어지는 곳</p>
        </div>
        <MemberListWrapper>
          {paginatedData.map((member) => (
            <MemberItem key={member.id} member={member} />
          ))}
        </MemberListWrapper>
      </Memberwrap>
      <div className="flex justify-center items-center h-10 pb-4">
        <Stack>
          <Pagination
            count={Math.ceil(MemberData.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
            shape="rounded"
            sx={{
              "& .Mui-selected": {
                backgroundColor: "#283c50 !important",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: "#283c50",
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
