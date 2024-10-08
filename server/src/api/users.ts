import express, { Request, Response } from "express";
import User from "../models/User"; // User 모델 가져오기
import jwt from "jsonwebtoken";

const router = express.Router();

// /api/users/:userId 라우트
router.get("/users/:userId", async (req: Request, res: Response) => {
  const { userId } = req.params;
  const numericUserId = parseInt(userId, 10); // userId를 숫자로 변환

  // JWT 토큰 인증 검사
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // JWT 검증
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    console.log("Decoded token:", decoded); // 디코딩된 토큰 로그

    // 사용자 정보 조회
    const user = await User.findById(numericUserId); // 변환된 숫자 ID로 사용자 조회
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error("Error during token verification:", error); // 오류 로그
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
