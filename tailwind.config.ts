import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // src 디렉토리 내의 모든 js, ts, jsx, tsx 파일
    "./pages/**/*.{js,ts,jsx,tsx}", // pages 디렉토리 내의 모든 js, ts, jsx, tsx 파일
    "./components/**/*.{js,ts,jsx,tsx}", // components 디렉토리 내의 모든 js, ts, jsx, tsx 파일
    "./app/**/*.{js,ts,jsx,tsx}", // app 디렉토리 내의 모든 js, ts, jsx, tsx 파일
  ],
  theme: {
    colors: {
      Background: "#F3F4F6",
      BarndColor: "#1D2088",
      Textcolor: "#66707A",
      Title: "#181A1B",
      PointColor: "#3985F2",
      Caution: "#FD541E",
      blue: "#0064FF",
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xl: "18px",
      "2xl": "20px",
      "3xl": "24px",
      "4xl": "28px",
      "5xl": "32px",
      "6xl": "38px",
      "7xl": "42px",
      "8xl": "48px",
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      medium: "500",
      bold: "700",
    },
  },
  plugins: [],
};
export default config;
