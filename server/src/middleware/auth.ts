// src/middleware/auth.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JwtPayload } from "../types/User"; // 사용자 정의된 JwtPayload 가져오기

const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer token 형식에서 토큰 추출

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // decoded를 JwtPayload로 타입 지정
    req.user = decoded as { id: number; username: string }; // 요청에 사용자 정보 추가
    next();
  });
};

export default auth;
