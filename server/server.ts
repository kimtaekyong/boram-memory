import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv"; // 환경 변수를 다루기 위한 dotenv 패키지
import memorialRoutes from "./src/api/memorials"; // 메모리얼 라우터 가져오기
import userRoutes from "./src/api/signup"; // 회원가입 라우터 가져오기
import loginRoutes from "./src/api/authRoutes"; // 로그인 라우터 가져오기
import profileRoutes from "./src/api/users";

dotenv.config(); // 환경 변수 로드

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*", // Next.js 서버 주소를 환경 변수로 설정
    credentials: true, // 필요한 경우 인증 정보 전달 허용
  })
);

// JSON 파싱을 위한 미들웨어
app.use(express.json());

// URL-encoded 데이터 파싱을 위한 미들웨어 (폼 데이터 등)
app.use(express.urlencoded({ extended: true })); // URL-encoded 형식의 요청 바디 파싱

// 기본 API 라우트
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "서버 연결 중 " });
});

// 메모리얼 라우터 사용
app.use("/api/memorials", memorialRoutes); // /api/memorials 라우터 추가
app.use("/api/signup", userRoutes);
app.use("/api/authRoutes", loginRoutes);
app.use("/api/users", profileRoutes);

// 에러 핸들링 미들웨어
app.use((err: any, req: Request, res: Response, next: Function) => {
  console.error("Error:", err.message); // 오류 메시지 로그
  res.status(500).json({ message: "Internal server error" });
});

// 서버 실행
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
