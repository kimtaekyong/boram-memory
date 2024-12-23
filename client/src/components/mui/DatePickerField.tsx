import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import "dayjs/locale/ko"; // 한글 로케일을 불러옴

// dayjs에 한국어 로케일을 설정
dayjs.locale("ko");

const boxStyles = {
  position: "relative",
  display: "flex",
  gap: "12px",
  width: "100%",
};

const calendarStyles = {
  position: "absolute",
  top: "32px",
  zIndex: 10,
  backgroundColor: "#fff",
  boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.2)",
  borderRadius: "8px",
};

interface DatePickerFieldProps {
  label: string;
  value: any;
  onChange: (value: any) => void;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({ label, value, onChange }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true); // TextField 클릭 시 캘린더 열기
  const handleClose = () => setOpen(false); // 캘린더 외부 클릭 시 닫기

  const handleDateChange = (newValue: any) => {
    onChange(newValue); // 선택된 날짜 업데이트
    handleClose(); // 캘린더 닫기
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = dayjs(event.target.value, "YYYY. MM. DD", true);
    if (newDate.isValid()) {
      onChange(newDate); // 날짜 포맷이 맞으면 업데이트
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={boxStyles}>
        <TextField
          variant="outlined"
          fullWidth
          label={label}
          value={value ? value.format("YYYY. MM. DD") : ""}
          onClick={handleOpen} // TextField 클릭 시 열림
          onChange={handleTextChange} // TextField에서 직접 입력 시 업데이트
        />
        {open && (
          <DateCalendar
            sx={calendarStyles}
            value={value}
            onChange={handleDateChange} // 날짜 선택 시 변경
            disableFuture // 미래 날짜 비활성화
            disableHighlightToday // 오늘 날짜 강조 비활성화
          />
        )}
      </Box>
    </LocalizationProvider>
  );
};

export default DatePickerField;
