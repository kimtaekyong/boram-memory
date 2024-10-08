"use client";

import React from "react";
import { styled } from "styled-components";
import Button from "../common/button/Primary";
import { FC, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode"; // jwt-decode 라이브러리 import

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

// JWT의 payload에서 user_id를 가져오기 위한 인터페이스 정의
interface DecodedToken {
  id: any;
  user_id?: string; // user_id의 타입
  exp: number; // 만료 시간
}

// Memorial 인터페이스 정의
interface Memorial {
  memorial_id: string; // 기념물 ID
  memorial_name: string; // 기념물 이름
  memorial_date_of_birth: string; // 생년 (문자열로)
  memorial_date_of_death: string; // 사망일 (문자열로)
  memorial_date_family: string; // 가족 구성원 (문자열로)
}

const Profile: FC = () => {
  const [memorials, setMemorials] = useState<Memorial[]>([]); // Memorial 타입을 가진 배열로 초기화
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState<string | null>(null); // 에러 상태

  // API에서 데이터 가져오기
  useEffect(() => {
    const fetchMemorials = async () => {
      // JWT를 localStorage에서 가져오기
      const token = localStorage.getItem("token"); // JWT 토큰 가져오기

      if (!token) {
        setError("로그인이 필요합니다.");
        setLoading(false);
        return;
      }

      try {
        // JWT에서 id를 디코딩하여 user_id로 변환
        const decoded: DecodedToken = jwtDecode<DecodedToken>(token); // JWT 디코딩
        const userId = decoded.id; // id를 user_id로 사용

        if (!userId) {
          throw new Error("user_id를 찾을 수 없습니다.");
        }

        console.log("전달된 user_id: ", userId); // user_id 값을 콘솔에 출력

        const response = await fetch("http://localhost:4000/api/memorials", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_id: userId }), // user_id를 요청 본문에 포함
        });

        if (!response.ok) {
          throw new Error("데이터를 가져오는 데 실패했습니다.");
        }

        const data = await response.json();
        setMemorials(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "알 수 없는 에러가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchMemorials();
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
              {/* 기념물 데이터가 있다고 가정하고 개별적으로 렌더링 */}
              {memorials.length > 0 && (
                <>
                  {/* 첫 번째 memorial 데이터를 표시 */}
                  <ul>
                    <li className="DeadName">
                      <span className="font-bold">고인명</span>
                      <span>故 {memorials[0].memorial_name} 님</span>
                    </li>
                    <li className="">
                      <span className="font-bold">별세일</span>
                      {Math.floor(
                        (new Date().getTime() - new Date(memorials[0].memorial_date_of_death).getTime()) /
                          (1000 * 60 * 60 * 24)
                      )}
                      일 ( {new Date(memorials[0].memorial_date_of_death).toLocaleDateString()} )
                    </li>
                    <li className="">
                      <span className="font-bold">생년월일</span>
                      {new Date(memorials[0].memorial_date_of_birth).toLocaleDateString()} (향년{" "}
                      {new Date(memorials[0].memorial_date_of_death).getFullYear() -
                        new Date(memorials[0].memorial_date_of_birth).getFullYear()}
                      세)
                    </li>
                    <li className="">
                      <span className="font-bold">가족구성</span>
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
