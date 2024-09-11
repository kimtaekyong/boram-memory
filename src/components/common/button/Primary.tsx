import React from "react";

interface ButtonProps {
  text: string; // 버튼에 표시할 텍스트
  onClick: () => void; // 버튼 클릭 시 실행될 함수
  color: string; // 버튼의 배경색
}

const Button: React.FC<ButtonProps> = ({ text, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: "#fff",
        padding: "8px 16px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "700",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
