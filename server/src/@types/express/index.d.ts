// src/types/express/index.d.ts
import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      user?: { id: number; username: string }; // user 속성 추가
    }
  }
}
