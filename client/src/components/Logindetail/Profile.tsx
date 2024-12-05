"use client";

import React from "react";
import { styled } from "styled-components";
import Button from "../common/button/Primary";
import { FC, useEffect, useState } from "react";
import { fetchMemorials } from "@/server/apiService";

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
      border-bottom: 1px solid rgba(231, 231, 231, 0.55);
      color: rgba(81, 81, 81, 0.55);
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

const Profile: FC = () => {
  const [memorials, setMemorials] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMemorials = async () => {
      try {
        const data = await fetchMemorials(); // API 호출
        setMemorials(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "알 수 없는 에러가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    getMemorials();
  }, []);

  // 로딩 중일 때
  if (loading) {
    return <div>로딩 중...</div>;
  }

  // 에러 처리
  if (error) {
    return <div>에러: {error}</div>;
  }

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
              {memorials.length > 0 && (
                <>
                  {/* 첫 번째 memorial 데이터를 표시 */}
                  <ul>
                    <li className="DeadName">
                      <span className="font-medium">고인명</span>
                      <span>故 {memorials[0].memorial_name} 님</span>
                    </li>
                    <li className="">
                      <span className="font-medium">별세일</span>
                      {Math.floor(
                        (new Date().getTime() - new Date(memorials[0].memorial_date_of_death).getTime()) /
                          (1000 * 60 * 60 * 24)
                      )}
                      일 ( {new Date(memorials[0].memorial_date_of_death).toLocaleDateString()} )
                    </li>
                    <li className="">
                      <span className="font-medium">생년월일</span>
                      {new Date(memorials[0].memorial_date_of_birth).toLocaleDateString()} (향년{" "}
                      {new Date(memorials[0].memorial_date_of_death).getFullYear() -
                        new Date(memorials[0].memorial_date_of_birth).getFullYear()}
                      세)
                    </li>
                    <li className="">
                      <span className="font-medium">가족구성</span>
                      <span>{memorials[0].memorial_date_family}</span>
                    </li>
                  </ul>
                </>
              )}
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
