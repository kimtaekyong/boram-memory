import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

const Dropwrap = styled.div`
  .drop__wrap {
    position: relative;
    width: 100%;
    min-width: 180px;

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      border-radius: 4px;
      background-color: #fff;
      border: 1px solid #ccc;
      padding: 8px 12px;
      cursor: pointer;

      &:focus {
        outline: none; /* 포커스 시 기본 아웃라인 제거 */
      }
    }

    ul {
      background: #fff;
      position: absolute;
      top: 44px;
      width: 100%;
      border-radius: 4px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 그림자 효과 */

      li {
        padding: 8px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;

        &:hover {
          background: #f0f0f0; /* 호버 시 배경색 변경 */
        }
      }
    }
  }

  .arrow {
    margin-left: 8px; /* 텍스트와 아이콘 사이 여백 */
    transition: transform 0.5s ease; /* 애니메이션 추가 */
  }

  .arrow.up {
    transform: rotate(180deg); /* 아이콘이 위로 향할 때 회전 */
  }
`;

interface DropdownProps {
  options: string[]; // 드롭다운에서 선택할 옵션 리스트
  onSelect: (option: string) => void; // 선택된 옵션을 처리할 함수 추가
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("홍길자"); // 선택된 옵션 상태
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 드롭다운 외부 클릭 시 닫히도록 처리하는 로직
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option); // 선택된 옵션 상태 업데이트
    setIsOpen(false); // 옵션 선택 시 드롭다운 닫기
    onSelect(option); // 선택된 옵션 처리
  };

  return (
    <Dropwrap>
      <div ref={dropdownRef} className="drop__wrap">
        <button onClick={handleToggle} className="dropdown-toggle">
          {selectedOption + " 님의 추모관 "} {/* 선택된 옵션을 버튼 텍스트로 표시 */}
          <span className={`arrow ${isOpen ? "up" : ""}`}>
            <ExpandMoreRoundedIcon />
          </span>
          {/* 화살표 아이콘 */}
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            {options.map((option, index) => (
              <li key={index} onClick={() => handleOptionSelect(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Dropwrap>
  );
};

export default Dropdown;
