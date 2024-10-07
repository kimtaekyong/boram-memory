"use client";

import React from "react";
import { styled } from "styled-components";
import Button from "../common/button/Primary";
import { FC, useEffect, useState } from "react";
import { useParams } from "next/navigation"; // useParams 훅 가져오기

// memorial 데이터 타입 정의
type MemorialProps = {
  id: number;
  name: string;
  date_of_death: string;
  date_of_birth: string;
  family_members: string;
  chief_mourner: string;
};

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

// 서버에서 데이터를 직접 패칭하는 함수
const fetchMemorial = async (memorialId: string): Promise<MemorialProps> => {
  const res = await fetch(`/api/memorials/${memorialId}`);
  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(`Failed to fetch data: ${errorResponse.message}`);
  }
  return res.json();
};

const Profile: FC = () => {
  const { memorialId } = useParams(); // useParams를 통해 memorialId 가져오기

  const [memorial, setMemorial] = useState<MemorialProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // memorialId가 배열일 경우 첫 번째 요소만 사용
    if (!memorialId) return;

    const id = Array.isArray(memorialId) ? memorialId[0] : memorialId;

    const loadMemorial = async () => {
      try {
        console.log("Fetching memorial with ID:", id);
        const fetchedMemorial = await fetchMemorial(id);
        setMemorial(fetchedMemorial);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Unknown error occurred");
        }
      }
    };

    loadMemorial();
  }, [memorialId]);

  // 데이터가 없거나 오류가 발생했을 경우 처리
  if (error) {
    return <div>{error}</div>;
  }

  if (!memorial) {
    return <div>Loading...</div>;
  }

  // 향년 계산 함수
  const calculateAgeAtDeath = (dateOfBirth: string, dateOfDeath: string): number => {
    const birthDate = new Date(dateOfBirth);
    const deathDate = new Date(dateOfDeath);
    let age = deathDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = deathDate.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && deathDate.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // 별세일로부터 경과 일수 계산 함수
  const calculateDaysSinceDeath = (dateOfDeath: string): number => {
    const deathDate = new Date(dateOfDeath);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - deathDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const ageAtDeath = calculateAgeAtDeath(memorial.date_of_birth, memorial.date_of_death);
  const daysSinceDeath = calculateDaysSinceDeath(memorial.date_of_death);

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
                <span>故 {memorial.name} 님</span>
              </li>
              <li className="">
                <span className="font-bold">별세일</span>
                {daysSinceDeath}일 ( {new Date(memorial.date_of_death).toLocaleDateString()} )
              </li>
              <li className="">
                <span className="font-bold">생년월일</span>
                {new Date(memorial.date_of_birth).toLocaleDateString()} (향년 {ageAtDeath}세)
              </li>
              <li className="">
                <span className="font-bold">가족구성</span>
                <span>{memorial.family_members}</span>
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
