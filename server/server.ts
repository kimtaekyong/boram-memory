import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors()); // 필요한 경우 CORS 설정

// JSON 파싱을 위한 미들웨어
app.use(express.json());

// 기본 API 라우트
app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from Express backend!" });
});

// 서버 실행
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
