"use client";

// app/user/[id]/page.js
import { useParams } from "next/navigation";

const UserProfile = () => {
  const { id } = useParams(); // useParams를 사용하여 동적 매개변수 가져오기

  // 예시 데이터 - 실제 데이터는 API 호출로 가져올 수 있음
  const user = { id, Deceased: `故 연＊호 님`, Sangju: "연＊흠" };

  if (!id) return <p>로딩 중...</p>; // ID가 없으면 로딩 메시지 표시

  return (
    <div>
      <h1>사용자 프로필</h1>
      <p>사용자 ID: {user.id}</p>
      <p>이름: {user.Deceased}</p>
      <p>상주: {user.Sangju}</p>
    </div>
  );
};

export default UserProfile;
