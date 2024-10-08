// routes/authRoutes.ts
import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User"; // User 모델 가져오기
import auth from "../middleware/auth"; // JWT 검증 미들웨어 가져오기

const router = express.Router();

// 로그인 라우트
router.post("/login", async (req: Request, res: Response) => {
  const { username, phone_number } = req.body; // 요청에서 사용자 이름과 전화번호 가져오기

  // 입력 유효성 검사
  if (!username || !phone_number) {
    return res.status(400).json({ message: "Username and phone number are required" });
  }

  try {
    // username과 phone_number로 사용자 정보 조회
    const user = await User.findByUsernameAndPhoneNumber(username, phone_number);

    if (!user) {
      return res.status(404).json({ message: "이름 또는 연락처를 다시 한번 확인하세요." });
    }

    // JWT 생성
    const token = jwt.sign({ id: user.user_id, username: user.username }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    // 응답 전송
    res.status(200).json({
      message: "Login successful",
      token, // 클라이언트에 토큰 전송
      authorized_memorial: user.authorized_memorial, // Include this in your response
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// 사용자 정보 조회 라우트
router.get("/me", auth, async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id; // req.user에서 사용자 ID 추출

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await User.findById(userId); // 사용자 정보 조회

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 사용자 정보 반환 (비밀번호 제외)
    const { password, ...userData } = user; // 비밀번호는 제외
    res.status(200).json({ user: userData });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
