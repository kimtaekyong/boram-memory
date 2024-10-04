"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";
import Primary from "../common/button/Primary";
import { useAuth } from "@/context/AuthContext"; // AuthContext import

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
  const { user, logout } = useAuth(); // AuthContext에서 user 정보와 login, logout 함수 가져옴
  const router = useRouter();

  // 로그인 핸들러
  const handleLogin = () => {
    router.push("/login"); // 로그인 페이지로 이동
  };

  // 로그아웃 핸들러
  const handleLogout = () => {
    logout(); // 로그아웃 처리
    router.push("/main"); // 로그아웃 후 메인 페이지로 이동
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
        <span className="userName text-lg font-medium mr-2">{user ? `${user.name} 님, 환영합니다!` : ""}</span>
        {/* user가 있으면 로그인된 상태로 간주하여 로그아웃/마이페이지 버튼을 표시 */}
        {user ? (
          <>
            <Primary onClick={handleMyPage} text="마이페이지" bgcolor="#3985F2" fontcolor="#fff" />
            <Primary onClick={handleLogout} text="로그아웃" bgcolor="#3985F2" fontcolor="#fff" />
          </>
        ) : (
          <>
            <Primary onClick={handleLogin} text="로그인" bgcolor="#3985F2" fontcolor="#fff" />
            <Primary onClick={handleSignup} text="회원가입" bgcolor="#3985F2" fontcolor="#fff" />
          </>
        )}
      </LoginWrap>
    </Userstatus>
  );
}
