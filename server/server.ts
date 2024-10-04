import express, { Request, Response } from "express";
import cors from "cors";
import memorialRoutes from "./src/api/memorials"; // 메모리얼 라우터 가져오기

const app = express();
app.use(cors()); // CORS 설정

// JSON 파싱을 위한 미들웨어
app.use(express.json());

// 기본 API 라우트
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "서버 연결 중 " });
});

// 메모리얼 라우터 사용
app.use("/api/memorials", memorialRoutes); // /api/memorials 라우터 추가

// 서버 실행
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
