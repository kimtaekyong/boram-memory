import express, { Request, Response } from "express";
import User from "../models/User"; // User 모델 가져오기

const router = express.Router();

// 사용자 등록 라우터
router.post("/register", async (req: Request, res: Response): Promise<void> => {
  const { username, phoneNumber } = req.body;

  try {
    // User 모델을 사용하여 사용자 생성
    const result = await User.createUser(username, phoneNumber);
    res.status(201).json({ message: "User created successfully", result });
  } catch (error) {
    // 오류 처리
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error creating user", error });
  }
});

export default router; // 라우터 내보내기
