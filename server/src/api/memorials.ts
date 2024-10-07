import express, { Request, Response } from "express";
import Memorial from "../models/Memorial"; // 모델 가져오기

const router = express.Router();

// 모든 메모리얼 데이터 가져오기
router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const memorials = await Memorial.getAllMemorials(); // 모델에서 모든 메모리얼 데이터 가져오기
    res.json(memorials);
  } catch (error) {
    console.error("Error fetching memorials:", (error as Error).message);
    res.status(500).json({ message: "Error fetching memorials" });
  }
});

// 특정 메모리얼 데이터 가져오기
router.get("/:memorialId", async (req: Request, res: Response): Promise<void> => {
  const { memorialId } = req.params;
  try {
    const memorial = await Memorial.getMemorialById(memorialId); // 모델에서 특정 메모리얼 데이터 가져오기
    if (memorial) {
      res.json(memorial); // 결과 반환
    } else {
      res.status(404).json({ message: "Memorial not found" });
    }
  } catch (error) {
    console.error("Error fetching memorial:", (error as Error).message);
    res.status(500).json({ message: "Error fetching memorial" });
  }
});

export default router;
