// src/routes/auth.ts

import express from "express";
import axios from "axios";
const router = express.Router();
import dotenv from "dotenv";

dotenv.config();

router.post("/nice", async (req, res) => {
  const { phoneNumber, verificationCode } = req.body;

  try {
    const response = await axios.post(process.env.NICE_API_URL as string, {
      api_key: process.env.NICE_API_KEY as string,
      api_secret: process.env.NICE_API_SECRET as string,
      phone_number: phoneNumber,
      verification_code: verificationCode,
    });

    if (response.data.success) {
      res.status(200).json({ message: "로그인성공", user: response.data.user });
    } else {
      res.status(401).json({ message: "연결실패" });
    }
  } catch (error) {
    console.error("NICE API Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
