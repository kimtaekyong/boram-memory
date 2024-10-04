import express, { Request, Response } from "express";
import pool from "../db/db"; // DB 연결을 가져오기
import { RowDataPacket } from "mysql2"; // 필요한 타입 가져오기

const router = express.Router();

// 모든 메모리얼 데이터 가져오기
router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM memorials"); // DB에서 메모리얼 데이터 가져오기
    res.json(rows);
  } catch (error) {
    console.error("Error fetching memorials:", (error as Error).message);
    res.status(500).json({ message: "Error fetching memorials" });
  }
});

// 특정 메모리얼 데이터 가져오기
router.get("/:memorialId", async (req: Request, res: Response): Promise<void> => {
  const { memorialId } = req.params;
  try {
    const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM memorials WHERE id = ?", [memorialId]);

    if (rows.length > 0) {
      res.json(rows[0]); // 첫 번째 결과 반환
    } else {
      res.status(404).json({ message: "Memorial not found" });
    }
  } catch (error) {
    console.error("Error fetching memorial:", (error as Error).message);
    res.status(500).json({ message: "Error fetching memorial" });
  }
});

export default router;
