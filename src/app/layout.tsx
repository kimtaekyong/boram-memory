"use client";

import "@/app/globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import theme from "../styles/theme";
import Main from "@/components/common/Main";
import { ThemeProvider } from "@mui/material/styles";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-Background">
        <ThemeProvider theme={theme}>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
