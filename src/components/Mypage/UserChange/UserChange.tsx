"use client";

import CustomDropdown from "@/components/common/Drop/CustomDropdown";
import React, { useState } from "react";
import styled from "styled-components";

const UserForm = styled.div``;

const TextInput = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  column-gap: 6px;
  &:first-child {
    border-top: 1px solid #e5e5e5;
  }
  input,
  select {
    padding: 12px;
    border: 1px solid #e5e5e5;
    background-color: rgba(211, 211, 211, 0.05);
    &:disabled {
      background-color: rgba(211, 211, 211, 0.35);
    }
    &::placeholder {
      color: #a5a5a5;
    }
  }
  label {
    width: 100%;
    max-width: 240px;
    font-size: 16px;
    font-weight: 700;
  }
  .userName {
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 6px;
    input {
      width: 100%;
      max-width: 340px;
    }
  }
  .userNamber {
    display: flex;
    column-gap: 6px;
    align-items: center;
    input {
      height: 50px;
      max-width: 100px;
    }
    .separator {
      content: "";
      display: block;
      background-color: #8f8f8f;
      width: 8px;
      height: 2px;
    }
  }
  .userDate {
    display: flex;
    column-gap: 12px;
    align-items: center;
    input {
      max-width: 140px;
    }
  }
  .userSex {
    display: flex;
    align-items: center;
    input[type="checkbox"] {
      -webkit-appearance: none; /* 기본 체크박스 스타일 제거 (Webkit 브라우저용) */
      -moz-appearance: none; /* 기본 체크박스 스타일 제거 (Firefox용) */
      appearance: none; /* 기본 체크박스 스타일 제거 (공통) */
      width: 40px;
      height: 24px;
      border-radius: 50%;
      padding: 0px;
    }
    input[type="checkbox"]:checked {
      background-color: #1f1f1f; /* 체크 상태일 때의 배경색 */
      background-image: url("/img/check_icon.svg");
      background-size: 18px;
      background-repeat: no-repeat;
      background-position: center center;
      border: 1px solid #1f1f1f;
    }
    label {
      font-weight: 500;
      font-size: 16px;
    }
  }
  .userReceive {
    display: flex;
    align-items: center;
    input[type="checkbox"] {
      -webkit-appearance: none; /* 기본 체크박스 스타일 제거 (Webkit 브라우저용) */
      -moz-appearance: none; /* 기본 체크박스 스타일 제거 (Firefox용) */
      appearance: none; /* 기본 체크박스 스타일 제거 (공통) */
      width: 40px;
      height: 24px;
      border-radius: 50%;
      padding: 0px;
    }
    input[type="checkbox"]:checked {
      background-color: #1f1f1f; /* 체크 상태일 때의 배경색 */
      background-image: url("/img/check_icon.svg");
      background-size: 18px;
      background-repeat: no-repeat;
      background-position: center center;
      border: 1px solid #1f1f1f;
    }
    label {
      font-weight: 500;
      font-size: 16px;
    }
  }
  .AuthBtn {
    padding: 6px 16px;
    background-color: #1f1f1f;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    height: 100%;
    height: 50px;
  }
`;

const UserChange = () => {
  const options = ["010", "011", "017", "016", "018"]; // 전화번호 옵션 배열

  const [isDisabled, setIsDisabled] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [firstValue, setFirstValue] = useState<string>(""); // 첫 번째 입력 값 상태
  const [secondValue, setSecondValue] = useState<string>(""); // 두 번째 입력 값 상태

  const handleAuth = () => {
    // 인증 처리 로직을 여기에 추가합니다.
    // 예: API 호출 등

    // 인증 버튼 클릭 후 입력 필드를 활성화합니다.
    setIsDisabled(true);
  };

  // 입력 값 변경 핸들러
  const handleFirstInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(/[^0-9]/g, ""); // 숫자 이외의 문자 제거
    setFirstValue(newValue); // 첫 번째 입력 값 업데이트
  };

  const handleSecondInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(/[^0-9]/g, ""); // 숫자 이외의 문자 제거
    setSecondValue(newValue); // 두 번째 입력 값 업데이트
  };

  return (
    <>
      <UserForm>
        <TextInput>
          <div className="userName">
            <label htmlFor="">이름</label>
            <input type="text" placeholder="홍길동" disabled={!isDisabled} />
          </div>
        </TextInput>
        <TextInput>
          <label htmlFor="phone">휴대폰번호</label>
          <div className="userNamber">
            <CustomDropdown options={options} isDisabled={!isDisabled} />
            <span className="separator"></span>
            <div className="middle">
              <input
                value={firstValue}
                onChange={handleFirstInputChange}
                type="text"
                maxLength={4}
                placeholder="1111"
                disabled={!isDisabled}
              />
            </div>
            <span className="separator"></span>
            <div className="last">
              <input
                value={secondValue}
                onChange={handleSecondInputChange}
                type="text"
                maxLength={4}
                placeholder="2222"
                disabled={!isDisabled}
              />
            </div>
          </div>
          <button className="AuthBtn" onClick={handleAuth}>
            인증하기
          </button>
        </TextInput>
        <TextInput>
          <label htmlFor="">생년월일</label>
          <div className="userDate">
            <input type="text" placeholder="1999" disabled />
            <span className="separator">년</span>
            <div className="middle">
              <input type="text" className="middle" placeholder="11" disabled />
            </div>
            <span className="separator">월</span>
            <div className="last">
              <input type="text" className="last" placeholder="11" disabled />
            </div>
            <span className="separator">일</span>
          </div>
        </TextInput>
        <TextInput>
          <label htmlFor="">성별</label>
          <div className="userSex">
            <div className="flex items-center gap-x-2">
              <input type="checkbox" checked disabled />
              <label>남자</label>
            </div>
            <div className="flex items-center gap-x-2">
              <input type="checkbox" disabled />
              <label>여자</label>
            </div>
          </div>
        </TextInput>
        <TextInput>
          <label htmlFor="">
            마케팅 활용 동의 및<br />
            광고 수신 동의
          </label>
          <div className="userReceive">
            <div className="flex items-center gap-x-2">
              <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(true)} />
              <label>동의</label>
            </div>
            <div className="flex items-center gap-x-2">
              <input type="checkbox" checked={!isChecked} onChange={() => setIsChecked(false)} />
              <label>거부</label>
            </div>
          </div>
        </TextInput>
      </UserForm>
    </>
  );
};

export default UserChange;
