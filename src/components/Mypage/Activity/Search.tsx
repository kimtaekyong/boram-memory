import React, { useState } from "react";
import { styled } from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import CustomDatePicker from "@/components/antd/Date";
import { Dayjs } from "dayjs";

// SearchLayout styled component
const SearchLayout = styled.div`
  display: flex;
  column-gap: 6px;
`;

// SearchField styled component
const SearchField = styled.ul`
  display: flex;
  width: 100%;
  column-gap: 6px;
  li {
    width: calc(100% / 2);
  }
`;

const NameSearchInput = styled.div<{ isFocused: boolean }>`
  position: relative;
  display: flex;
  padding: 12px;
  border-radius: 4px;
  transition: border 0.2s, box-shadow 0.2s;
  background: rgba(247, 247, 247, 0.55);
  border: 1px solid ${({ isFocused }) => (isFocused ? "#1677ff" : "#e5e5e5")};
  background: ${({ isFocused }) => (isFocused ? "#fff" : "")};
  height: 100%;
  &:hover {
    border-color: #1677ff;
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
    outline: 0;
    background-color: #ffffff;
  }
  input {
    box-sizing: border-box;
    width: 100%;
    font-size: 17px;
    letter-spacing: 0.2px;
    font-weight: 500;
    color: #1f1f1f;
    background: none;
    outline: 0;
    &::placeholder {
      font-weight: 400;
      letter-spacing: -0.25px;
    }
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

// SearchBtn styled component
const SearchBtn = styled.button<{ isActive: boolean }>`
  width: 20%;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  color: ${({ isActive }) => (isActive ? "#fff" : "#1f1f1f")};
  background-color: ${({ isActive }) => (isActive ? "#1677ff" : "transparent")};
  font-size: 16px;
  font-weight: 700;
  cursor: ${({ isActive }) => (isActive ? "pointer" : "not-allowed")};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
`;

const DatePickerfilter = styled.div`
  display: flex;
  column-gap: 6px;
`;

const ResultBtn = styled.button<{ isActive: boolean }>`
  width: 30%;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  color: #1f1f1f;
  font-size: 16px;
  font-weight: 700;
  cursor: ${({ isActive }) => (isActive ? "pointer" : "not-allowed")};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
`;

const Search = () => {
  const [isFocused, setIsFocused] = useState(false); // focus 상태 관리
  const [inputValue, setInputValue] = useState(""); // 입력 값 상태 관리
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null); // 선택된 날짜 상태 관리

  const handleAuth = () => {
    console.log("본인인증 중 입니다.");
  };

  const handleResult = () => {
    console.log("확인");
  };

  const onDateChange = (date: Dayjs | null, dateString: string | string[]) => {
    console.log("선택한 날짜:", dateString);
    setSelectedDate(date); // 선택된 날짜 업데이트
  };

  // 버튼 활성화 조건
  const isSearchBtnActive = inputValue.trim() !== "" && selectedDate !== null;

  return (
    <SearchLayout>
      <SearchField>
        <li>
          <NameSearchInput isFocused={isFocused}>
            <div className="icon">
              <SearchIcon
                sx={{
                  color: "rgba(31, 31, 31, 0.25)",
                  width: 26,
                  height: 26,
                }}
              />
            </div>
            <input
              type="text"
              placeholder="추모관 또는 고인명을 작성해주세요."
              value={inputValue} // input의 value 설정
              onChange={(e) => setInputValue(e.target.value)} // 입력 값 업데이트
              onFocus={() => setIsFocused(true)} // input이 focus될 때 상태 변경
              onBlur={() => setIsFocused(false)} // input이 blur될 때 상태 변경
            />
          </NameSearchInput>
        </li>
        <li>
          <DatePickerfilter>
            <CustomDatePicker onChange={onDateChange} />
            <ResultBtn onClick={handleResult} isActive={isSearchBtnActive} disabled={!isSearchBtnActive}>
              확인
            </ResultBtn>
          </DatePickerfilter>
        </li>
      </SearchField>
      <SearchBtn onClick={handleAuth} isActive={isSearchBtnActive} disabled={!isSearchBtnActive}>
        본인인증
      </SearchBtn>
    </SearchLayout>
  );
};

export default Search;
