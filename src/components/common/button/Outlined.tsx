import React from "react";

interface ButtonProps {
  text: string; // 버튼에 표시할 텍스트
  onClick: () => void; // 버튼 클릭 시 실행될 함수
  color: string; // 버튼의 배경색
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        border: "1px solid #eee",
        color: "#fff",
        padding: "14px 34px",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "500",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
