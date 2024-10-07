// models/User.ts
import pool from "../db/db"; // DB 연결 가져오기
import { RowDataPacket } from "mysql2"; // RowDataPacket 타입 가져오기

// 사용자 인터페이스 정의
interface User extends RowDataPacket {
  user_id: number;
  username: string;
  phone_number: string; // 전화번호
}

const UserModel = {
  createUser: async (username: string, phoneNumber: string): Promise<any> => {
    const query = "INSERT INTO users (username, phone_number) VALUES (?, ?)";
    const [result] = await pool.query(query, [username, phoneNumber]);
    return result; // 결과 반환
  },

  // 사용자 이름으로 사용자 찾기
  findByUsername: async (username: string): Promise<User | null> => {
    const query = "SELECT * FROM users WHERE username = ?";
    const [rows] = await pool.query<User[]>(query, [username]);
    return rows.length > 0 ? rows[0] : null; // 첫 번째 결과 반환
  },

  // 전화번호로 사용자 찾기
  findByPhoneNumber: async (phoneNumber: string): Promise<User | null> => {
    const query = "SELECT * FROM users WHERE phone_number = ?";
    const [rows] = await pool.query<User[]>(query, [phoneNumber]);
    return rows.length > 0 ? rows[0] : null; // 첫 번째 결과 반환
  },

  // username과 phone_number로 사용자 찾기
  findByUsernameAndPhoneNumber: async (username: string, phoneNumber: string): Promise<User | null> => {
    const query = "SELECT * FROM users WHERE username = ? AND phone_number = ?";
    const [rows] = await pool.query<User[]>(query, [username, phoneNumber]);
    return rows.length > 0 ? rows[0] : null; // 첫 번째 결과 반환
  },

  // 사용자 ID로 사용자 찾기
  findById: async (id: number): Promise<User | null> => {
    const query = "SELECT * FROM users WHERE user_id = ?";
    const [rows] = await pool.query<User[]>(query, [id]);
    return rows.length > 0 ? rows[0] : null; // 첫 번째 결과 반환
  },
};

export default UserModel; // User 모델 내보내기
