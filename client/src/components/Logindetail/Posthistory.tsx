import React from "react";
import styled from "styled-components";

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

const HistoryList = styled.ul`
  display: flex;
  li {
    width: calc(100% / 4);
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 6px;
    position: relative;
    color: #1f1f1f;
    &::after {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      width: 1px;
      height: 50%;
      background-color: rgba(31, 31, 31, 0.25);
    }
    &:last-child::after {
      display: none;
    }
    span {
      text-align: center;
      font-size: 16px;
      font-weight: 500;
      line-height: 1;
    }
    .count {
      font-size: 36px;
      font-weight: 300;
    }
  }
`;

const Posthistory = () => {
  return (
    <>
      <ComponentLayout>
        <h2>히스토리</h2>
        <HistoryList>
          <li>
            <span className="count">30</span>
            <span>게시물</span>
          </li>
          <li>
            <span className="count">20</span>
            <span>관심</span>
          </li>
          <li>
            <span className="count">10</span>
            <span>댓글</span>
          </li>
          <li>
            <span className="count">10</span>
            <span>공유</span>
          </li>
        </HistoryList>
      </ComponentLayout>
    </>
  );
};

export default Posthistory;
