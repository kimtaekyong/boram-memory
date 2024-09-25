"use client";

import React, { useState } from "react";
import styled from "styled-components";

const UserForm = styled.div``;

const TextInput = styled.div`
  display: flex;
  column-gap: 12px;
  label {
    width: 300px;
  }
  input {
    width: 100%;
    max-width: 640px;
  }
`;

const UserChange = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleAuth = () => {
    // 인증 처리 로직을 여기에 추가합니다.
    // 예: API 호출 등

    // 인증 버튼 클릭 후 입력 필드를 비활성화합니다.
    setIsDisabled(true);
  };
  return (
    <>
      <UserForm>
        <TextInput>
          <label htmlFor="">이름</label>
          <input type="text" />
        </TextInput>
        <TextInput>
          <label htmlFor="phone">휴대폰번호</label>
          <div className="userNamber">
            <select name="" id="" disabled={!isDisabled}>
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="017">017</option>
              <option value="016">016</option>
              <option value="018">018</option>
            </select>
            <span className="separator">-</span>
            <input type="text" className="middle" maxLength={4} placeholder="1111" disabled={!isDisabled} />
            <span className="separator">-</span>
            <input type="text" className="last" maxLength={4} placeholder="2222" disabled={!isDisabled} />
          </div>
          <button onClick={handleAuth}>인증하기</button>
        </TextInput>
        <TextInput>
          <label htmlFor="">생년월일</label>
          <div className="userDate">
            <input type="text" placeholder="1999" disabled />
            <span className="separator">년</span>
            <input type="text" className="middle" placeholder="11" disabled />
            <span className="separator">월</span>
            <input type="text" className="last" placeholder="11" disabled />
            <span className="separator">일</span>
          </div>
        </TextInput>
        <TextInput>
          <label htmlFor="">성별</label>
          <div className="userSex">
            <div className="flex">
              <input type="checkbox" checked disabled />
              <p>남자</p>
            </div>
            <div className="flex">
              <input type="checkbox" disabled />
              <p>여자</p>
            </div>
          </div>
        </TextInput>
        <TextInput>
          <label htmlFor="">마케팅 활용 동의 및 광고 수신 동의</label>
          <div className="userReceive">
            <div className="flex">
              <input type="checkbox" checked />
              <p>남자</p>
            </div>
            <div className="flex">
              <input type="checkbox" />
              <p>여자</p>
            </div>
          </div>
        </TextInput>
      </UserForm>
    </>
  );
};

export default UserChange;
