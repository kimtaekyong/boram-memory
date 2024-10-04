"use client";

import PostCard from "@/components/card/PostCard";
import Deceased from "@/components/user/Deceased";
import React from "react";
import { styled } from "styled-components";

const Page = styled.div`
  background-color: rgba(211, 211, 211, 0.15);
`;
const PageContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 0;
  width: 100%;
  display: flex;
  column-gap: 12px;
`;
const Component = styled.div`
  max-width: 400px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  padding: 18px 24px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  h2 {
    font-size: 18px;
    font-weight: 700;
    color: #1f1f1f;
    margin-bottom: 24px;
  }
`;
const PostComponent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
`;

const multiPostPage = () => {
  return (
    <Page>
      <PageContainer>
        <Component>
          <h2>등록 된 추모관</h2>
          <Deceased />
        </Component>
        <PostComponent>
          <PostCard></PostCard>
          <PostCard></PostCard>
        </PostComponent>
      </PageContainer>
    </Page>
  );
};

export default multiPostPage;
