// src/middleware/auth.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided or invalid format" });
  }

  const token = authHeader.split(" ")[1]; // 'Bearer' 다음의 토큰 추출

  jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // decoded 값을 JwtPayload로 명시적으로 변환
    req.user = decoded as { id: number; username: string }; // 요청에 사용자 정보 추가
    next();
  });
};

export default auth;
