"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext"; // AuthContext 사용
import { styled } from "styled-components";

const Pagelayout = styled.div`
  height: calc(100vh - 140px);
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 440px;
    margin: 0 auto;
    .login__title {
      margin-bottom: 14px;
      h2 {
        text-align: left;
        font-size: 38px;
        font-weight: 900;
        line-height: 1.35;
        margin-bottom: 8px;
        span {
          font-weight: 300;
        }
      }
      p {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.35;
        letter-spacing: -1.25px;
        color: rgba(31, 31, 31, 0.55);
      }
    }
    input {
      border-radius: 4px;
      height: 60px;
      border: 1px solid #e5e8eb;
      padding: 0 14px;
      font-size: 16px;
      font-weight: 500;
      &:focus {
        color: #1f1f1f;
        letter-spacing: 0.1px;
        outline: none;
        border: 1px solid #0064ff;
        transition: all 0.3s ease;
      }
    }
    .error-message {
      color: #fd541e;
      font-size: 16px;
      font-weight: 700;
      text-align: left;
      padding-left: 8px;
    }
    .login-button {
      padding: 14px;
      height: 56px;
      font-size: 16px;
      font-weight: 700;
      background-color: #0064ff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      &:disabled {
        background-color: #e5e8eb;
        color: #1f1f1f;
        cursor: not-allowed;
      }
    }
    .login__line {
      display: flex;
      justify-content: center;
      padding: 24px 0;
      span {
        width: 100%;
        display: block;
        position: relative;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        color: #1f1f1f;
        &::after {
          content: "";
          display: block;
          width: 45%;
          height: 1px;
          background-color: #e5e8eb;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        &::before {
          content: "";
          display: block;
          width: 45%;
          height: 1px;
          background-color: #e5e8eb;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    .login__signup {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      span {
        margin-bottom: 8px;
        font-size: 18px;
        font-weight: 600;
        color: rgba(31, 31, 31, 0.65);
        display: block;
        margin-bottom: 12px;
      }
      button {
        height: 58px;
        font-size: 16px;
        font-weight: 700;
        color: #1f1f1f;
        border-radius: 4px;
        width: 100%;
        border: 1px solid #e5e8eb;
      }
    }
  }
`;

const LoginForm = () => {
  const router = useRouter();
  const { login } = useAuth(); // login 함수 사용

  const handleSignup = () => {
    router.push("/signup");
  };

  // 더미 사용자 데이터
  const dummyUsers = [
    {
      id: 1,
      name: "홍길동",
      idOrPhone: "test",
      password: "1234",
    },
    {
      id: 2,
      name: "보람상조",
      idOrPhone: "test2",
      password: "1234",
    },
  ];

  const [idOrPhone, setIdOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isButtonDisabled = !idOrPhone || !password;

  const handleLogin = () => {
    // 사용자 확인
    const foundUser = dummyUsers.find(
      (user) => (user.idOrPhone === idOrPhone || user.name === idOrPhone) && user.password === password
    );

    if (foundUser) {
      // 로그인 성공 시 AuthContext에 name 저장
      login(foundUser.name);
      router.push("/loginMain");
      console.log("로그인 성공:", foundUser); // 로그인 성공 시 사용자 정보 콘솔 출력
    } else {
      setErrorMessage("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <>
      <Pagelayout>
        <div className="login-form">
          <div className="login__title">
            <h2>
              <span>안녕하세요.</span>
              <br />
              보람그룹입니다.
            </h2>
            <p>보람 온라인 추모관은 고인과 함께 찍은 사진이나 동영상을 등록하여,</p>
            <p>지인들에게 자신의 생각과 감정 등을 공유 할 수 있습니다.</p>
          </div>
          <input
            type="text"
            placeholder="아이디 또는 전화번호"
            value={idOrPhone}
            onChange={(e) => setIdOrPhone(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button
            disabled={isButtonDisabled}
            className={`login-button ${isButtonDisabled ? "disabled" : ""}`}
            onClick={handleLogin}
          >
            로그인
          </button>
          <div className="login__line">
            <span>또는</span>
          </div>
          <div className="login__signup">
            <span>온라인 추모관에 처음 오셨나요 ?</span>
            <button onClick={handleSignup}>회원가입</button>
          </div>
        </div>
      </Pagelayout>
    </>
  );
};

export default LoginForm;
