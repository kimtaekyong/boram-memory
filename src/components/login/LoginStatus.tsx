"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Primary from "../common/button/Primary";

export default function LoginStatus() {
  const Userstatus = styled.div`
    display: flex;
    align-items: center;
    column-gap: 18px;
  `;
  const LoginStatus = styled.div`
    display: flex;
    align-items: center;
    column-gap: 4px;
  `;

  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리
  const [userName, setUserName] = useState(""); // 유저 네임 상태 관리
  const router = useRouter();

  const handleLogin = () => {
    // 로그인 처리 로직
    setIsLoggedIn(true);
    setUserName("홍길동"); // 로그인된 유저의 이름을 설정
    router.push("/login");
  };

  const handleLogout = () => {
    // 로그아웃 처리 로직
    setIsLoggedIn(false);
    setUserName("");
    // 로그아웃 후 리다이렉트 또는 기타 로직 수행 가능
    router.push("/");
  };

  const handleSignup = () => {
    // 회원가입 처리 로직
    router.push("/signup"); // 회원가입 페이지로 이동
  };

  const handleMyPage = () => {
    // 마이페이지 이동 로직
    router.push("/mypage");
  };

  return (
    <Userstatus>
      <span className="userName text-xl">{isLoggedIn ? userName + " 님 반갑습니다." : ""} </span>
      <LoginStatus>
        {/* 로그인 여부에 따라 버튼 내용 및 동작 변경 */}
        {isLoggedIn ? (
          <>
            <Primary onClick={handleMyPage} text="마이페이지" color="#3985F2" />
            <Primary onClick={handleLogout} text="로그아웃" color="#3985F2" />
          </>
        ) : (
          <>
            <Primary onClick={handleLogin} text="로그인" color="#3985F2" />
            <Primary onClick={handleSignup} text="회원가입" color="#3985F2" />
          </>
        )}
      </LoginStatus>
    </Userstatus>
  );
}
