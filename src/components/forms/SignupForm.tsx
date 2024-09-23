"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import CustomModal from "../common/CustomModal";
import { modalContents } from "../../utils/modalContents "; // 생성한 파일에서 import

const SignupForm = () => {
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [allAgree, setAllAgree] = useState(false);
  const [signupTerms, setSignupTerms] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [smsAgree, setSmsAgree] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const Membership = () => {
    setModalTitle("회원가입약관");
    setModalContent(modalContents.membershipTerms);
    setOpen(true);
  };

  const Personal = () => {
    setModalTitle("개인정보처리방침");
    setModalContent(modalContents.privacyPolicy);
    setOpen(true);
  };

  const Marketing = () => {
    setModalTitle("마케팅 활용 동의 및 광고 수신 동의");
    setModalContent(modalContents.smsAgreement);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleAllAgreeChange = (e: { target: { checked: any } }) => {
    const isChecked = e.target.checked;
    setAllAgree(isChecked);
    setSignupTerms(isChecked);
    setPrivacyPolicy(isChecked);
  };

  const handlePhoneAuth = () => {
    const niceAuthUrl = "https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb"; // 나이스 본인인증 URL
    const niceAuthParams = {
      // 나이스 본인인증 API에 필요한 파라미터
      // 이 정보는 나이스 본인인증 측의 API 문서에 따라 설정합니다.
      serviceId: "C4IC5FMAA1SA", // 나이스에서 제공받은 서비스 ID
      requestId: "G4236", // 고유한 요청 ID
      callbackUrl: "https://yourdomain.com/callback", // 인증 완료 후 돌아올 콜백 URL
    };

    // 인증 페이지를 팝업으로 열기
    window.open(`${niceAuthUrl}?${new URLSearchParams(niceAuthParams)}`, "niceAuth", "width=500,height=600");
  };

  // 이름 입력 핸들러
  const handleNameChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setName(e.target.value);
  };

  // 핸드폰 번호 입력 시 숫자만 허용하는 함수
  const handlePhoneNumberChange = (e: { target: { value: string } }) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 허용
    setPhoneNumber(value);
  };

  // name과 phoneNumber 둘 다 값이 있으면 버튼 활성화
  const isButtonResult = name.length > 0 && phoneNumber.length > 0;
  const isButtonEnabled = signupTerms && privacyPolicy;

  return (
    <FormWrapper>
      <Checktitle>
        <h2>약관에 동의해주세요.</h2>
        <p>회원가입에 필요한 필수항목 및 선택항목 약관에 동의 해 주세요.</p>
      </Checktitle>

      <CheckboxAll>
        <div className="AllWrap">
          <div>
            <input type="checkbox" id="allAgree" checked={allAgree} onChange={handleAllAgreeChange} />
            <label htmlFor="allAgree">이용약관 모두 동의</label>
          </div>
          <p>서비스 이용을 위해 아래 약관에 모두 동의 합니다.</p>
        </div>
      </CheckboxAll>

      <CheckboxWrapper>
        <label htmlFor="signupTerms">
          <input
            type="checkbox"
            id="signupTerms"
            checked={signupTerms}
            onChange={(e) => setSignupTerms(e.target.checked)}
          />
          <p>
            <span className="text-Caution font-bold">(필수)</span> 회원가입 약관 동의
          </p>
        </label>
        <Button onClick={Membership}>보기</Button>
      </CheckboxWrapper>

      <CheckboxWrapper>
        <label htmlFor="privacyPolicy">
          <input
            type="checkbox"
            id="privacyPolicy"
            checked={privacyPolicy}
            onChange={(e) => setPrivacyPolicy(e.target.checked)}
          />
          <p>
            <span className="text-Caution font-bold">(필수)</span> 개인정보 처리방침 동의
          </p>
        </label>
        <Button onClick={Personal}>보기</Button>
      </CheckboxWrapper>

      <CheckboxWrapper>
        <label htmlFor="smsAgree">
          <input type="checkbox" id="smsAgree" checked={smsAgree} onChange={(e) => setSmsAgree(e.target.checked)} />

          <p>
            <span className="text-Textcolor font-bold">(선택)</span> SMS 수신 동의
          </p>
        </label>
        <Button onClick={Marketing}>보기</Button>
      </CheckboxWrapper>

      <SubmitButton type="button" disabled={!isButtonEnabled} onClick={handlePhoneAuth}>
        휴대폰 본인인증
      </SubmitButton>

      <UserResult>
        <span>휴대폰 본인인증을 진행하시면 회원정보가 자동 입력 됩니다.</span>
        <div className="user__From">
          <h2>회원 정보 입력</h2>
          <form action="">
            <ResultInput>
              <span>이름</span>
              <input type="text" placeholder="홍길동" value={name} onChange={handleNameChange} />
            </ResultInput>
            <ResultInput>
              <span>휴대폰번호</span>
              <input
                type="tel"
                placeholder="01012345678"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                maxLength={11}
              />
            </ResultInput>

            <SubmitButton type="button" disabled={!isButtonResult} onClick={() => alert("회원가입완료")}>
              회원가입
            </SubmitButton>
          </form>
        </div>
      </UserResult>
      <CustomModal open={open} handleClose={handleClose} modalContent={modalContent} modalTitle={modalTitle} />
    </FormWrapper>
  );
};

// 스타일 컴포넌트 정의
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  max-width: 480px;
  margin: 0 auto;
  height: calc(100vh - 80px);
`;
const Checktitle = styled.div`
  h2 {
    font-size: 26px;
    text-align: left;
    font-weight: 900;
  }
  p {
    font-size: 16px;
    font-weight: 700;
    color: rgba(31, 31, 31, 0.45);
  }
`;
const CheckboxAll = styled.div`
  padding: 14px 0;
  border-bottom: 1px solid #e5e8eb;
  .AllWrap {
    display: flex;
    justify-content: center;
    flex-direction: column;
    column-gap: 12px;
    div {
      display: flex;
      align-items: center;
      column-gap: 8px;
      line-height: 1;
    }
    p {
      font-size: 16px;
      font-weight: 500;
      color: rgba(31, 31, 31, 0.55);
      line-height: 2;
      padding-left: 32px;
    }
  }
  input[type="checkbox"] {
    appearance: none;
    width: 24px;
    height: 24px;
    border: 1px solid #e5e8eb;
    border-radius: 50%;
    position: relative;
    cursor: pointer;

    &:checked {
      background-color: #007bff;
      border-color: #007bff;
    }

    &:checked::after {
      content: "✔";
      color: white;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 12px;
    }
  }

  label {
    font-size: 18px;
    font-weight: 700;
  }
`;
const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 12px;
  line-height: 1;
  input[type="checkbox"] {
    appearance: none;
    width: 22px;
    height: 22px;
    border: 1px solid #e5e8eb;
    border-radius: 50%;
    position: relative;
    cursor: pointer;

    &:checked {
      background-color: #007bff;
      border-color: #007bff;
    }

    &:checked::after {
      content: "✔";
      color: white;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 12px;
    }
  }

  label {
    font-size: 16px;
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
`;
const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  height: 58px;
  font-weight: 700;
  margin-top: 12px;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#007BFF")};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
const UserResult = styled.div`
  span {
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 700;
    color: rgb(253, 84, 30);
  }
  h2 {
    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e8eb;
    text-align: left;
    font-size: 16px;
    font-weight: 600;
    padding: 12px 16px;
    border-radius: 4px;
  }
  .user__From {
    form {
      margin: 12px 0;
    }
  }
`;
const ResultInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  span {
    display: block;
    width: 140px;
    color: #999;
    margin-bottom: 0;
    font-weight: 500;
  }
  input {
    width: 100%;
    height: 50px;
    background-color: #f5f5f5;
    padding: 0 18px;
    color: #999;
  }
`;
export default SignupForm;
