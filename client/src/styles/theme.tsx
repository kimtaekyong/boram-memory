// src/styles/theme.ts
import { createTheme } from "@mui/material/styles";

// MUI 테마를 정의합니다.
const theme = createTheme({
  typography: {
    fontFamily: '"Pretendard"', // 기본 폰트 패밀리 설정
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {},
            "& .MuiInputLabel-root": {
              color: "black", // 라벨 색상
            },
            "& .MuiInputBase-input": {
              padding: "0", // 입력 부분 padding 설정
              fontSize: "18px",
              fontWeight: "500",
              color: "rgba(81,81,81,0.4)",
              cursor: "pointer",
              fontFamily: "Spoqa Han Sans Neo",
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "none", // 기본 테두리 제거
          outline: "none",
        },
      },
    },
  },
});

export default theme;
