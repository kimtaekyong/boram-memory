"use client";

import Dropdown from "@/components/common/Drop/Dropdown";
import Activity from "@/components/Mypage/Activity/ActivityTable";
import Authority from "@/components/Mypage/Authority/Authority";
import Memorial from "@/components/Mypage/Memorial/Memorial";
import Tabbutton from "@/components/Mypage/Tab/Tabbutton";
import React, { useState } from "react";
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
const Component = styled.div`
  background-color: #fff;
  border: 1px solid #e5e5e5;
  padding: 24px;
  border-radius: 8px;
  .component__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
    h2 {
      font-size: 18px;
      font-weight: 700;
      color: #1f1f1f;
    }
    .viewBtn {
      padding: 8px 12px;
      background-color: #1f1f1f;
      border-radius: 4px;
      color: #fff;
      font-size: 14px;
      font-weight: 500;
    }
  }
`;
const Mypage = () => {
  const options = ["홍길자", "홍길동", "홍길순"];

  // selectedOption 기본값 설정
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_selectedOption, setSelectedOption] = useState<string>(options[0]);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleOpen = () => {
    console.log("활동관리 더 보기");
  };
  const shouldShowCheckbox = false; // 체크박스를 표시할지 여부
  return (
    <Page>
      <PageContainer>
        <PageTitle>
          <h2>마이페이지</h2>
          <p>추모관 관리 및 회원정보를 변경 하실 수 있습니다.</p>
        </PageTitle>
        <Tabbutton />
        <Container>
          <Component>
            <div className="component__title">
              <h2>권한관리</h2>
            </div>
            <Activity />
          </Component>
          <Component>
            <div className="component__title">
              <h2>추모관관리</h2>
              <Dropdown options={options} onSelect={handleSelect} />
            </div>
            <Authority />
          </Component>
          <Component>
            <div className="component__title">
              <h2>활동관리</h2>
              <button className="viewBtn" onClick={handleOpen}>
                더보기
              </button>
            </div>
            <Memorial useCheckbox={shouldShowCheckbox} showNotesColumn={false} />
          </Component>
        </Container>
      </PageContainer>
    </Page>
  );
};

export default Mypage;
