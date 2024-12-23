import React, { useState } from "react";
import { styled } from "styled-components";
import DatePickerField from "@/components/mui/DatePickerField"; // 분리된 컴포넌트 import
import dayjs from "dayjs"; // dayjs 임포트

const Search = styled.div`
  position: relative;
  width: 100%;
  max-width: 1196px;
  border-radius: 8px;
  margin-top: 12px;
  margin: -58px auto 0 auto;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 24px 24px 24px 0;
  flex: auto;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.04);
  ul {
    display: flex;
    li {
      padding: 0 48px;
      border-right: 1px solid #e4e4e5;
      box-sizing: border-box;
      width: calc(100% / 2);
      p {
        font-size: 1rem;
        font-weight: 700;
        color: #3c3c3c;
        margin-bottom: 4px;
        letter-spacing: -2px;
        transform: skew(-0.1deg);
      }
      input {
        font-size: 1rem;
        font-weight: 500;
      }
      &:last-child {
        width: 100%;
        border-right: none;
        input[type="text"] {
          width: 100%;
        }
      }
    }
  }

  #submit {
    height: 52px;
    border-radius: 6px;
    background-color: #283c50;
    padding: 0 32px;
    color: #fff;
  }
`;

const SearchBar = () => {
  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(dayjs().subtract(7, "day")); // 일주일 전 날짜로 초기화
  const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(dayjs());
  const [name, setName] = useState("");

  const handleSearch = () => {
    // 날짜가 존재하면 "YYYY-MM-DD" 형식으로 변환, 없으면 "None"
    const formattedStartDate = startDate ? startDate.format("YYYY-MM-DD") : "None";
    const formattedEndDate = endDate ? endDate.format("YYYY-MM-DD") : "None";

    console.log("Start Date:", formattedStartDate, "End Date:", formattedEndDate, "Name:", name);
  };

  return (
    <form action="">
      <Search>
        <ul>
          <li>
            <p>시작일</p>
            <DatePickerField value={startDate} onChange={(newValue) => setStartDate(newValue)} label={""} />
          </li>
          <li>
            <p>종료일</p>
            <DatePickerField value={endDate} onChange={(newValue) => setEndDate(newValue)} label={""} />
          </li>
          <li>
            <p>성함</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="고인명 또는 상주명으로 검색해주세요."
            />
          </li>
        </ul>
        <button id="submit" onClick={handleSearch}>
          검색
        </button>
      </Search>
    </form>
  );
};

export default SearchBar;
