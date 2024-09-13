import styled from "styled-components";
import { darken } from "polished"; // polished에서 darken 함수 임포트

interface ButtonProps {
  text: string;
  onClick: () => void;
  color: string;
  width?: string; // width와 height를 선택적으로 받을 수 있도록 설정
  height?: string;
}

const StyledButton = styled.button<{ color: string; width?: string; height?: string }>`
  width: ${(props) => props.width || "280px"};
  height: ${(props) => props.height || "68px"};
  border: 1px solid #7d7d7d;
  background: rgba(31, 31, 31, 0.25);
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  transition: background-color 0.3s, transform 0.3s;

  /* &:hover {
    background-color: ${(props) => darken(0.1, props.color)}; // darken 사용
    transform: scale(1.05);
  } */
`;

const Button: React.FC<ButtonProps> = ({ text, onClick, color, width, height }) => {
  return (
    <StyledButton onClick={onClick} color={color} width={width} height={height}>
      {text}
    </StyledButton>
  );
};

export default Button;
