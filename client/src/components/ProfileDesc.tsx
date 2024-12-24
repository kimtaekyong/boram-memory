"use client";

import { FC } from "react";

// memorial 데이터 타입 정의
type MemorialProps = {
  id: number;
  name: string;
  date_of_death: string;
  date_of_birth: string;
  family_members: string;
};

// 나이 계산 함수
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

// 경과 일수 계산 함수
const calculateDaysSinceDeath = (dateOfDeath: string): number => {
  const deathDate = new Date(dateOfDeath);
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - deathDate.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

const ProfileDesc: FC<{ memorial: MemorialProps }> = ({ memorial }) => {
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
