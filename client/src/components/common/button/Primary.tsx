import React from "react";

interface ButtonProps {
  text: string; // 버튼에 표시할 텍스트
  onClick: () => void; // 버튼 클릭 시 실행될 함수
  fontcolor: string; // 버튼의 폰트색
  bgcolor: string; // 버튼의 배경색
}

const Button: React.FC<ButtonProps> = ({ text, onClick, bgcolor, fontcolor }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bgcolor,
        color: fontcolor,
        padding: "0 14px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "500",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "34px",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
