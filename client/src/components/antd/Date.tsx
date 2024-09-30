"use client";

// src/components/antd/Date.tsx
import React from "react";
import styled from "styled-components"; // styled-components import
import { DatePicker, ConfigProvider } from "antd";
import { Dayjs } from "dayjs"; // dayjs와 Dayjs 타입 import
import locale from "antd/lib/locale/ko_KR"; // 한글 로케일 import

// styled-components를 사용하여 DatePicker 스타일링
const StyledDatePicker = styled(DatePicker)`
  display: flex;
  font-family: "Pretendard";
  align-items: center;
  column-gap: 8px;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  padding: 12px;
  width: 100%;
  height: 100%;
  max-width: 420px;
  border-radius: 4px;
  background-color: rgba(247, 247, 247, 0.55);
  font-weight: 400;
  letter-spacing: -0.25px;
  .ant-picker-input > input {
    font-size: 17px;
    letter-spacing: -1px;
    font-weight: 500;
  }
  // 추가적인 스타일링이 필요하다면 아래에 추가하세요
`;

interface DateProps {
  onChange: (date: Dayjs | null, dateString: string | string[]) => void;
}

const CustomDatePicker: React.FC<DateProps> = ({ onChange }) => {
  return (
    <ConfigProvider locale={locale}>
      <StyledDatePicker
        onChange={(date: unknown, dateString: string | string[]) => {
          // date를 Dayjs로 단언
          const finalDate = date as Dayjs | null;
          // dateString이 string[]일 경우 첫 번째 값을 사용
          const finalDateString = Array.isArray(dateString) ? dateString[0] : dateString;
          onChange(finalDate, finalDateString);
        }}
        allowClear={false} // 클리어 기능 추가
        format="YYYY / MM / DD" // 날짜 형식 설정
        placeholder="별세일시" // 플레이스홀더 설정
        inputReadOnly={true} // 텍스트 입력을 방지
      />
    </ConfigProvider>
  );
};

export default CustomDatePicker;
