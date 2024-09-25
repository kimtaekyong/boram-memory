"use client";

import { useRouter, usePathname } from "next/navigation";
import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  .move__btn {
    padding: 6px 16px;
    background-color: #1f1f1f;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
  }
`;

const TabBtncontainer = styled.div`
  display: flex;
  column-gap: 4px;
  button {
    padding: 8px 12px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.01px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    background-color: transparent; // 기본 배경색
    &.active {
      background-color: #1f1f1f; // 활성화 시 배경색
      color: #fff; // 활성화 시 텍스트 색상
    }
  }
`;

const Tabbutton = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Wrap>
      <TabBtncontainer>
        <button
          className={pathname === "/mypage/activity" ? "active" : ""}
          onClick={() => router.push("/mypage/activity")}
        >
          권한관리
        </button>
        <button
          className={pathname === "/mypage/authority" ? "active" : ""}
          onClick={() => router.push("/mypage/authority")}
        >
          추모관관리
        </button>
        <button
          className={pathname === "/mypage/memorial" ? "active" : ""}
          onClick={() => router.push("/mypage/memorial")}
        >
          활동관리
        </button>
        <button
          className={pathname === "/mypage/userChange" ? "active" : ""}
          onClick={() => router.push("/mypage/userChange")}
        >
          회원정보변경
        </button>
      </TabBtncontainer>
      <button className="move__btn" onClick={() => router.push("/mypage")}>
        전체관리
      </button>
    </Wrap>
  );
};

export default Tabbutton;
