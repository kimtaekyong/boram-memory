"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Primary from "../common/button/Primary";

const Userstatus = styled.div`
  display: flex;
  align-items: center;
  column-gap: 18px;
`;

const LoginWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;

export default function LoginStatus() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null); // 사용자 정보를 상태로 관리

  useEffect(() => {
    // 페이지가 로드될 때 토큰이 있는지 확인
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserData(token); // 사용자 정보를 가져오는 함수 호출
    }
  }, []);

  // 클라이언트에서 사용자 정보 요청
  const fetchUserData = async (token: string) => {
    try {
      const response = await fetch("http://localhost:4000/api/authRoutes/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // JWT 토큰 추가
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      setUser(data.user); // 사용자 정보를 상태에 저장
      // console.log(data.user); // 사용자 정보 확인 (디버깅용)
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // 로그인 핸들러
  const handleLogin = async () => {
    const token = localStorage.getItem("token"); // 토큰 가져오기
    if (token) {
      await fetchUserData(token); // 사용자 정보를 가져오는 함수 호출
    }
    router.push("/login"); // 로그인 페이지로 이동
  };

  // 로그아웃 핸들러
  const handleLogout = () => {
    localStorage.removeItem("token"); // 로컬 스토리지에서 토큰 삭제
    setUser(null); // 사용자 정보 초기화
    router.push("/main"); // 메인 페이지로 이동
    alert("로그아웃을 하실건가요?");
  };

  const handleSignup = () => {
    router.push("/signup"); // 회원가입 페이지로 이동
  };

  const handleMyPage = () => {
    router.push("/mypage"); // 마이페이지로 이동
  };

  return (
    <Userstatus>
      <LoginWrap>
        {user ? (
          <>
            <span className="userName text-lg font-medium mr-2">{user.username}님, 환영합니다!</span>
            <Primary onClick={handleMyPage} text="마이페이지" bgcolor="#3985F2" fontcolor="#fff" />
            <Primary onClick={handleLogout} text="로그아웃" bgcolor="#3985F2" fontcolor="#fff" />
          </>
        ) : (
          <>
            <span className="userName text-lg font-medium mr-2"></span>
            <Primary onClick={handleLogin} text="로그인" bgcolor="#3985F2" fontcolor="#fff" />
            <Primary onClick={handleSignup} text="회원가입" bgcolor="#3985F2" fontcolor="#fff" />
          </>
        )}
      </LoginWrap>
    </Userstatus>
  );
}
