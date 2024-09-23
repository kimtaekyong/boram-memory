import React from "react";
import { styled } from "styled-components";
import Button from "../common/button/Primary";

const Profilelayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 42px 24px 24px 24px;
`;

const ProfileImg = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 180px;
    height: 180px;
    background-color: #eee;
    border-radius: 50%;
  }
`;

const ProfileDesc = styled.div`
  ul {
    padding: 42px 0;
    li {
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      font-weight: 500;
      padding: 16px 0;
      border-bottom: 1px solid #e5e5e5;
      &:last-child {
        border-bottom: none;
      }
    }
  }
`;

const Setting = styled.div`
  button {
    width: 100%;
    height: 48px;
    margin-bottom: 8px;
  }
`;

const Profile = () => {
  const handelOpen = () => {
    console.log("고인 프로필 편집");
  };
  const Settingopen = () => {
    console.log("추모관설정");
  };
  return (
    <>
      <Profilelayout>
        <div>
          <ProfileImg>
            <img src="/img/no_img.png" alt="" />
          </ProfileImg>
          <ProfileDesc>
            <ul>
              <li className="DeadName">
                <span className="font-bold">고인명</span>
                <span>故 홍길자 (성별) 님</span>
              </li>
              <li className="">
                <span className="font-bold">별세일</span>
                <span>365일 (2023.02.25일로부터)</span>
              </li>
              <li className="">
                <span className="font-bold">생년월일</span>
                <span>1950.01.01(향년 74세)</span>
              </li>
              <li className="">
                <span className="font-bold">가족구성</span>
                <span>2남2녀</span>
              </li>
            </ul>
          </ProfileDesc>
        </div>
        <Setting>
          <Button onClick={handelOpen} text="고인 프로필 편집" bgcolor="#3985F2" fontcolor="#fff"></Button>
          <Button onClick={Settingopen} text="추모관 설정" bgcolor="#eee" fontcolor="#1f1f1f"></Button>
        </Setting>
      </Profilelayout>
    </>
  );
};

export default Profile;
