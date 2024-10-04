import React from "react";
import { styled } from "styled-components";

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ShareButton: React.FC = () => {
  const share = () => {
    alert("공유팝업"); // 클릭 시 경고창 표시
  };

  return (
    <Button onClick={share}>
      <svg width="28" height="28" viewBox="-1 -1 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.6226 5.12889L14.9374 23.3824C14.601 23.9571 13.7383 23.841 13.5658 23.1978L10.8154 12.9422L10.7928 12.9102C10.7723 12.8748 10.7551 12.8384 10.741 12.8014L3.22117 5.28033C2.7487 4.80786 3.08332 4 3.7515 4H24.9754C25.5547 4 25.9153 4.6289 25.6226 5.12889ZM22.9224 6.77211L12.3508 12.8756L14.5496 21.0758L22.9224 6.77211ZM5.56216 5.5L22.1274 5.49907L11.6251 11.5626L5.56216 5.5Z"
          fill="#1F1F1F"
        />
      </svg>
    </Button>
  );
};

export default ShareButton;
