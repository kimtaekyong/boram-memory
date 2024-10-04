import mysql, { Pool } from "mysql2/promise"; // promise를 사용하는 mysql2 패키지와 Pool 타입 가져오기
import dotenv from "dotenv"; // 환경 변수 모듈 가져오기

dotenv.config(); // .env 파일의 환경 변수 로드

// 데이터베이스 연결 풀 생성
const pool: Pool = mysql.createPool({
  host: process.env.DB_HOST as string, // 환경 변수 타입 단언
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
});

// 연결 테스트 (선택 사항)
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("DB 연결 성공");
    connection.release(); // 연결 해제
  } catch (error) {
    console.error("DB 연결 실패:", (error as Error).message); // Error 타입 단언
  }
})();

export default pool; // DB 연결 풀을 내보냄
