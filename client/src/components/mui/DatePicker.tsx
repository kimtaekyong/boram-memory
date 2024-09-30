import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ko"; // 한글 로케일 임포트
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// dayjs에 한글 로케일 설정
dayjs.locale("ko");

export default function DatePickerValue() {
  // 현재 날짜와 30일 전 날짜 계산
  const today = dayjs();
  const thirtyDaysAgo = today.subtract(30, "day");

  const [startDate, setStartDate] = React.useState<Dayjs | null>(thirtyDaysAgo);
  const [endDate, setEndDate] = React.useState<Dayjs | null>(today);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        <DatePicker
          format="YYYY-MM-DD"
          label="시작일"
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
        />
        <DatePicker
          sx={{
            "&.MuiTextField-root": {
              marginLeft: "8px",
            },
          }}
          format="YYYY-MM-DD"
          label="종료일"
          value={endDate}
          onChange={(newValue) => setEndDate(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
