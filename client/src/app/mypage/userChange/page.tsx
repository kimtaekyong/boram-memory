"use client";

import Tabbutton from "@/components/Mypage/Tab/Tabbutton";
import UserChange from "@/components/Mypage/UserChange/UserChange";
import React from "react";
import styled from "styled-components";

const Page = styled.div`
  background-color: rgba(211, 211, 211, 0.15);
`;
const PageContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
const PageTitle = styled.div`
  text-align: center;
  padding: 80px;
  line-height: 1.5;
  h2 {
    font-size: 32px;
    font-weight: 700;
  }
  p {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.05px;
    color: rgba(31, 31, 31, 0.55);
  }
`;
const Container = styled.div`
  padding: 12px 0 24px 0;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const Result = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 4px;
  padding: 14px 0 60px 0;
  button {
    padding: 14px 48px;
    border-radius: 4px;
    color: #1f1f1f;
    font-size: 15px;
    font-weight: 500;
  }
  .cancelBtn {
    border: 1px solid #e5e5e5;
  }
  .sendlBtn {
    border: 1px solid #0064ff;
    background-color: #0064ff;
    color: #fff;
  }
`;

const userChange = () => {
  const handleCancel = () => {
    alert("취소");
  };

  const handleSend = () => {
    alert("확인버튼");
  };

  return (
    <Page>
      <PageContainer>
        <PageTitle>
          <h2>마이페이지</h2>
          <p>추모관 관리 및 회원정보를 변경 하실 수 있습니다.</p>
        </PageTitle>
        <Tabbutton />
        <Container>
          <UserChange />
          <Result>
            <button onClick={handleCancel} className="cancelBtn">
              취소
            </button>
            <button onClick={handleSend} className="sendlBtn">
              확인
            </button>
          </Result>
        </Container>
      </PageContainer>
    </Page>
  );
};

export default userChange;
