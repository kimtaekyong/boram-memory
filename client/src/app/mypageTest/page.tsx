"use client";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode"; // jwt-decode 라이브러리 import

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
  username: string; // 관리자 이름
  memorial_date_of_birth: string; // 생년 (문자)
  memorial_date_of_death: string; // 사망일 (문자)
  memorial_date_family: string; // 가족 구성원 (문자)
}

const Home = () => {
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

  // 데이터가 성공적으로 로드되었을 때

  return (
    <div>
      <h1>기념물 목록</h1>
      <ul>
        {memorials.map((memorial) => (
          <li key={memorial.memorial_id}>
            <h2>{memorial.memorial_name}</h2>
            <p>관리자: {memorial.username}</p>
            <p>생년: {new Date(memorial.memorial_date_of_birth).toLocaleDateString()}</p>
            <p>사망일: {new Date(memorial.memorial_date_of_death).toLocaleDateString()}</p>
            <p>가족: {memorial.memorial_date_family}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
