"use client";

import React from "react";
import "@/app/globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import GlobalStyles from "@/styles/globals";
import MetaTags from "@/components/common/MetaTags";
import { usePathname } from "next/navigation"; // usePathname import

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // 현재 경로 가져오기
  const isIntroPage = pathname === "/"; // intro 페이지 확인

  return (
    <html lang="en">
      <body className="bg-Background">
        <MetaTags />
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {!isIntroPage && <Header />} {/* intro 페이지가 아닐 때만 Header 렌더링 */}
          {children}
          {!isIntroPage && <Footer />} {/* intro 페이지가 아닐 때만 Footer 렌더링 */}
        </ThemeProvider>
      </body>
    </html>
  );
}
