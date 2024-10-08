import pool from "../db/db"; // DB 연결 가져오기
import { RowDataPacket } from "mysql2";

// 메모리얼 모델 정의
const Memorial = {
  // 로그인된 사용자에 따라 기념물 정보를 가져오기
  getMemorialsByUserId: async (userId: number): Promise<RowDataPacket[]> => {
    const query = `
        SELECT 
          u.username AS username,
          m.id AS memorial_id,
          m.name AS memorial_name,
          m.date_of_death AS memorial_date_of_death,
          m.date_of_birth AS memorial_date_of_birth,
          m.family_members AS memorial_date_family
        FROM 
            users u
        JOIN 
            memorials m ON u.user_id = m.id
        WHERE 
            u.user_id = ?;
      `;

    const [rows] = await pool.query<RowDataPacket[]>(query, [userId]);
    return rows;
  },
};

export default Memorial;
