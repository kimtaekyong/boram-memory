"use client";

import SwiperUser from "@/components/common/SwiperUser";
import styled from "styled-components";
import React from "react";
import SearchBar from "@/components/common/SearchBar";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import MemberList from "@/components/common/MemberList";

const logoutMain = () => {
  const PageContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    .Advertising {
      display: flex;
      justify-content: center;
      margin-top: 8px;
      overflow: hidden;
      button {
        width: 50%;
        padding: 24px 0;
        background-color: #fbfbfb;
        border: 1px solid #e5e5e5;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 8px;
        font-size: 18px;
        font-weight: 500;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        &:first-child {
          border-right: 0px;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
          border-top-right-radius: 0px;
          border-bottom-right-radius: 0px;
        }
      }
    }
  `;
  return (
    <>
      <SwiperUser />
      <PageContainer>
        <div className="Advertising">
          <button
            onClick={() => window.open("https://www.boram.com/Cs/OnlineConsultation", "_blank")}
            className="text-Textcolor"
          >
            온라인 상담 신청
            <KeyboardArrowRightOutlinedIcon />
          </button>
          <button
            onClick={() => window.open("https://www.boram.com/Funeral/Catalog", "_blank")}
            className="text-Textcolor"
          >
            장례상품 가입
            <KeyboardArrowRightOutlinedIcon />
          </button>
        </div>
        <SearchBar />
        <MemberList />
      </PageContainer>
    </>
  );
};

export default logoutMain;
