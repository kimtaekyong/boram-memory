import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styled from "styled-components";

const CustomSelect = styled(Select)`
  & .MuiSelect-select {
    padding: 12px 14px; /* 원하는 padding 값 */
    font-size: 16px;
    color: #66707a;
  }

  /* border 및 outline 제거 */
  & .MuiOutlinedInput-notchedOutline {
    border: 1px solid #e5e8eb; /* 기본 테두리 제거 */
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border: 1px solid #e5e8eb;
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 1px solid #e5e8eb;
  }

  &.Mui-focused {
    outline: none; /* 포커스 시 outline 제거 */
  }
`;

const CustomBox = styled(Box)`
  &:focus {
    outline: none; /* Box에 포커스 시 outline 제거 */
  }
`;

export default function BasicSelect() {
  const [familySite, setFamilySite] = React.useState<string>("0");

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value as string;
    setFamilySite(value);

    switch (value) {
      case "10":
        window.open("https://www.boram.com", "_blank", "noopener,noreferrer"); // 새 창에서 외부 사이트 열기
        break;
      case "20":
        window.open("https://www.boramsangjo.com/", "_blank", "noopener,noreferrer"); // 새 창에서 다른 외부 사이트 열기
        break;
      case "30":
        window.open("https://www.boramlife.com/", "_blank", "noopener,noreferrer"); // 새 창에서 또 다른 외부 사이트 열기
        break;
      default:
        break;
    }
  };

  return (
    <CustomBox
      sx={{
        minWidth: 180,
      }}
    >
      <FormControl fullWidth>
        <CustomSelect value={familySite} onChange={handleChange}>
          <MenuItem value="0" className="text-Textcolor">
            Family Site
          </MenuItem>
          <MenuItem value="10">보람상조</MenuItem>
          <MenuItem value="20">보람상조개발</MenuItem>
          <MenuItem value="30">보람상조라이프</MenuItem>
        </CustomSelect>
      </FormControl>
    </CustomBox>
  );
}
