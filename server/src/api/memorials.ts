import express, { Request, Response } from "express";
import Memorial from "../models/Memorial"; // 모델 가져오기

const router = express.Router();

// 로그인된 사용자에 따라 기념물 정보를 가져오는 API 엔드포인트
router.post("/", async (req: Request, res: Response): Promise<void> => {
  const userId = req.body.user_id; // 요청 본문에서 user_id 가져오기

  try {
    const memorials = await Memorial.getMemorialsByUserId(userId); // 모델에서 기념물 데이터 가져오기
    res.json(memorials);
  } catch (error) {
    console.error("쿼리 실행 실패: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
