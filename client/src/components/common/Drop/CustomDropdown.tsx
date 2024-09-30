import { useState } from "react";
import styled, { css } from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DropdownContainer = styled.div`
  position: relative;
  width: 100px; /* 원하는 너비 설정 */
`;

const DropdownHeader = styled.div<{ isDisabled: boolean; isOpen: boolean }>`
  padding: 10px;
  border: 1px solid #e5e5e5;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")}; /* disabled 상태에서 커서 변경 */
  background-color: ${({ isDisabled }) =>
    isDisabled ? "rgba(211, 211, 211, 0.35)" : "rgba(211, 211, 211, 0.05)"}; /* disabled 상태의 배경색 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  color: ${({ isDisabled }) => (isDisabled ? "#a5a5a5" : "#1f1f1f")}; /* disabled 상태의 글자색 */

  /* 화살표 회전 스타일 */
  .arrow {
    transition: transform 0.3s ease;
    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: rotate(180deg); /* 드롭다운이 열릴 때 화살표 회전 */
      `}
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #e5e5e5;
  background: white;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1000; /* 드롭다운이 다른 요소 위에 표시되도록 설정 */
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(211, 211, 211, 0.55); /* 마우스 오버 시 배경색 변경 */
  }

  &.selected {
    background-color: rgba(211, 211, 211, 0.35); /* 선택된 항목 배경색 변경 */
  }
`;

interface CustomDropdownProps {
  options: string[];
  defaultOption?: string;
  isDisabled?: boolean;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, defaultOption = "010", isDisabled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(defaultOption); // 명시적으로 string 타입 설정

  const handleSelectOption = (option: string) => {
    if (!isDisabled) {
      setSelectedOption(option);
      setIsOpen(false); // 선택 후 드롭다운 닫기
    }
  };

  return (
    <DropdownContainer className={isDisabled ? "disabled" : ""}>
      <DropdownHeader isDisabled={isDisabled} isOpen={isOpen} onClick={() => !isDisabled && setIsOpen(!isOpen)}>
        {selectedOption}
        <span className="arrow">
          <KeyboardArrowDownIcon />
        </span>
      </DropdownHeader>
      {isOpen &&
        !isDisabled && ( // 드롭다운이 열릴 때 disabled 상태가 아닐 때만 보여줌
          <DropdownList>
            {options.map((option) => (
              <DropdownItem
                key={option}
                className={option === selectedOption ? "selected" : ""}
                onClick={() => handleSelectOption(option)}
              >
                {option}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
    </DropdownContainer>
  );
};

export default CustomDropdown;
