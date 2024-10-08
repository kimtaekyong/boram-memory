"use client";

import React from "react";
import "@/app/globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import GlobalStyles from "@/styles/globals";
import MetaTags from "@/components/common/MetaTags";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isIntroPage = pathname === "/";

  return (
    <html lang="en">
      <body>
        <MetaTags />
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {!isIntroPage && <Header />}
          {children}
          {!isIntroPage && <Footer />}
        </ThemeProvider>
      </body>
    </html>
  );
}
