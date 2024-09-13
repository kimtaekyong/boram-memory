"use client";

import SwiperUser from "@/components/common/SwiperUser";
import styled from "styled-components";
import React from "react";

const PageContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  height: calc(100vh - 80px);
`;

const logoutMain = () => {
  return (
    <div>
      <SwiperUser />
      <PageContainer>로그인 전 메인</PageContainer>
    </div>
  );
};

export default logoutMain;
