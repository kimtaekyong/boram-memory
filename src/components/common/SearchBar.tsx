import React from "react";
import DatePicker from "../mui/DatePicker";
import { styled } from "styled-components";
import Search from "../mui/Search";

const SearchBar = () => {
  const SearchWrap = styled.div`
    border-radius: 8px;
    margin-top: 12px;
    width: 100%;
    padding: 24px;
    background-color: #fbfbfb;
    border: 1px solid #e5e5e5;
    display: flex;
    flex-direction: column;
    column-gap: 8px;
    h2 {
      font-size: 20px;
      font-weight: 700;
      padding: 8px 0 14px 0;
    }
  `;
  const DateWrap = styled.div`
    display: flex;
    column-gap: 8px;
  `;

  return (
    <SearchWrap>
      <h2>조회기간</h2>
      <DateWrap>
        <DatePicker />
        <Search />
      </DateWrap>
    </SearchWrap>
  );
};

export default SearchBar;
