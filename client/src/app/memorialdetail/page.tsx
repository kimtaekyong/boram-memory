"use client";

import Dday from "@/components/Logindetail/Dday";
import Interest from "@/components/Logindetail/Interest";
import DeadFeed from "@/components/Logindetail/DeadFeed";
import Posthistory from "@/components/Logindetail/Posthistory";
import Profile from "@/components/Logindetail/Profile";
import React from "react";
import { styled } from "styled-components";

const Page = styled.div`
  background-color: rgba(211, 211, 211, 0.15);
`;
const PageContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  padding: 24px 0;
  column-gap: 14px;
`;
const LeftContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
  position: sticky;
  top: 12px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
`;
const RightContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 14px;
`;

const memorialdetail = () => {
  return (
    <Page>
      <PageContainer>
        <LeftContainer>
          <Profile />
        </LeftContainer>
        <RightContainer>
          <Posthistory />
          <Dday />
          <Interest />
          <DeadFeed />
        </RightContainer>
      </PageContainer>
    </Page>
  );
};

export default memorialdetail;
