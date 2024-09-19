import React from "react";
import { FormControl, InputLabel, MenuItem, Select, TextField, Button, SelectChangeEvent } from "@mui/material";

const Search = () => {
  const [searchType, setSearchType] = React.useState<string>("10");
  const [searchTerm, setSearchTerm] = React.useState<string>("이름을 작성 해 주세요.");

  // onChange 핸들러에서 SelectChangeEvent 타입 사용
  const handleSearchTypeChange = (event: SelectChangeEvent<string>) => {
    setSearchType(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("검색 타입:", searchType);
    console.log("검색어:", searchTerm);
    // API 호출 또는 다른 작업을 수행할 수 있습니다.
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <form className="pt-[8px] flex-1" onSubmit={handleSubmit}>
        <div className="flex items-center gap-x-2">
          <FormControl sx={{ width: 160 }} variant="outlined">
            <InputLabel id="search-type-label">검색필터</InputLabel>
            <Select labelId="search-type-label" value={searchType} onChange={handleSearchTypeChange} label="검색 타입">
              <MenuItem value="10">고인명</MenuItem>
              <MenuItem value="20">상주명</MenuItem>
            </Select>
          </FormControl>
          <div className="flex w-full gap-x-1">
            <TextField
              fullWidth
              type="text"
              variant="outlined"
              label="이름을 작성 해 주세요."
              value={searchTerm}
              onChange={handleInputChange} // onChange 핸들러 분리
            />
            <Button type="submit" variant="contained" color="primary">
              검색
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Search;
