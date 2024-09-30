import React from "react";
import PanoramaIcon from "@mui/icons-material/Panorama";
import { styled } from "styled-components";
import PostCard from "../card/PostCard";

const ComponentLayout = styled.div`
  background-color: #fff;
  border: 1px solid #e5e5e5;
  padding: 24px;
  border-radius: 8px;
`;

const ComponentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  h2 {
    font-size: 18px;
    font-weight: 700;
    color: #1f1f1f;
  }
  button {
    cursor: pointer;
    padding: 8px 14px;
    background-color: #0064ff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    column-gap: 6px;
    border-radius: 4px;
  }
`;

const DeadFeed = () => {
  const handleChange = () => {
    console.log("컨텐츠변경");
  };
  return (
    <div>
      <ComponentLayout>
        <ComponentTitle>
          <h2>게시물</h2>
          <button onClick={handleChange}>
            장례사진 및 동영상보기
            <PanoramaIcon sx={{ color: "#fff", width: 20, height: 20 }} />
          </button>
        </ComponentTitle>
        <PostCard />
      </ComponentLayout>
    </div>
  );
};

export default DeadFeed;
