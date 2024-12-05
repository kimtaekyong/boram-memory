// apiService.ts
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  id: string; // 디코딩된 JWT의 id 타입을 지정
}

export const fetchMemorials = async (): Promise<any> => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("로그인이 필요합니다.");
  }

  const decoded: DecodedToken = jwtDecode<DecodedToken>(token);
  const userId = decoded.id;

  if (!userId) {
    throw new Error("user_id를 찾을 수 없습니다.");
  }

  console.log("전달된 user_id: ", userId);

  const response = await fetch("http://localhost:4000/api/memorials", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user_id: userId }),
  });

  if (!response.ok) {
    throw new Error("데이터를 가져오는 데 실패했습니다.");
  }

  return response.json(); // 데이터 반환
};
