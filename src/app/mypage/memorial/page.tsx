"use client";

import Memorial from "@/components/Mypage/Memorial/Memorial";
import Tabbutton from "@/components/Mypage/Tab/Tabbutton";
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
  }
`;
const memorial = () => {
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
              <h2>
                추모글<span>4건</span>
              </h2>
            </div>
            <Memorial />
          </Component>
          <Component>
            <div className="component__title">
              <h2>
                좋아요<span>4건</span>
              </h2>
            </div>
            <Memorial />
          </Component>
          <Component>
            <div className="component__title">
              <h2>
                비공개 <span>2건</span>
              </h2>
            </div>
            <Memorial />
          </Component>
        </Container>
      </PageContainer>
    </Page>
  );
};

export default memorial;
