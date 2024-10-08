// src/types/express/index.d.ts (파일 위치는 프로젝트 구조에 맞게 설정)
import { User } from "../User"; // User 타입을 정의한 경로로 변경하세요

declare global {
  namespace Express {
    interface Request {
      user?: User; // 'user' 타입은 프로젝트에서 정의한 User 타입을 사용
    }
  }
}
