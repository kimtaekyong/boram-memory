import pool from "../db/db"; // DB 연결 가져오기
import { RowDataPacket } from "mysql2";

// 메모리얼 모델 정의
const Memorial = {
  // 모든 메모리얼 데이터 가져오기
  getAllMemorials: async (): Promise<RowDataPacket[]> => {
    const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM memorials");
    return rows;
  },

  // 특정 메모리얼 데이터 가져오기
  getMemorialById: async (memorialId: string): Promise<RowDataPacket | null> => {
    const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM memorials WHERE id = ?", [memorialId]);
    return rows.length > 0 ? rows[0] : null;
  },
};

export default Memorial;
