import React, { createContext, useState, useContext, ReactNode } from "react";

// AuthContext 타입 지정
interface AuthContextType {
  user: { name: string } | null;
  login: (name: string) => void;
  logout: () => void;
}

// 초기값을 지정하여 null을 허용
const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);

  // 만약 AuthContext가 null이라면 오류 처리
  if (!context) {
    throw new Error("useAuth는 AuthProvider 내에서 사용되어야 합니다.");
  }

  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ name: string } | null>(null);

  const login = (name: string) => {
    setUser({ name });
  };

  const logout = () => {
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
