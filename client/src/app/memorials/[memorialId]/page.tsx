"use client";

// client/src/app/memorials/[memorialId]/page.tsx
import { FC, useEffect, useState } from "react";

// memorial 데이터 타입 정의
type MemorialProps = {
  id: number;
  name: string;
  date_of_death: string;
  date_of_birth: string;
  family_members: string;
  chief_mourner: string;
};

// 서버에서 데이터를 직접 패칭하는 함수
const fetchMemorial = async (memorialId: string): Promise<MemorialProps> => {
  const res = await fetch(`http://localhost:4000/api/memorials/${memorialId}`);
  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(`Failed to fetch data: ${errorResponse.message}`);
  }
  return res.json();
};

const ProfileDesc: FC<{ memorialId: string }> = ({ memorialId }) => {
  const [memorial, setMemorial] = useState<MemorialProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMemorial = async () => {
      try {
        console.log("Fetching memorial with ID:", memorialId);
        const fetchedMemorial = await fetchMemorial(memorialId);
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

  return (
    <div className="ProfileDesc">
      <ul>
        <li className="DeadName">
          <span className="font-bold">고인명</span>
          <span>故 {memorial.name} 님</span>
        </li>
        <li>
          <span className="font-bold">별세일</span>
          <span>
            {daysSinceDeath}일 ( {new Date(memorial.date_of_death).toLocaleDateString()} )
          </span>
        </li>
        <li>
          <span className="font-bold">생년월일</span>
          <span>
            {new Date(memorial.date_of_birth).toLocaleDateString()} (향년 {ageAtDeath}세)
          </span>
        </li>
        <li>
          <span className="font-bold">가족구성</span>
          <span>{memorial.family_members}</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDesc;
