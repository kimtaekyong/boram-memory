import React from "react";

import styled from "styled-components";
import PosrComment from "./PosrComment";
import CardButton from "./button/CardButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const CradLayout = styled.article`
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
`;

const CardHeader = styled.div`
  padding: 16px 18px;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    column-gap: 8px;
    span {
      font-weight: 700;
      font-size: 16px;
      letter-spacing: 1.15;
      line-height: 1;
      &:last-child {
        font-weight: 500;
        color: rgba(126, 126, 126, 0.85);
      }
    }
  }
`;

const CardSlide = styled.div`
  overflow: hidden;
  img {
    height: 100%;
    max-height: 640px;
  }
`;

const CardDesc = styled.div`
  padding: 10px 18px;
  .comment__open {
    color: rgba(31, 31, 31, 0.85);
    font-weight: 500;
    font-size: 16px;
    padding-bottom: 4px;
  }
`;

const PostCard = () => {
  const handleComment = () => {
    console.log("댓글 모두 보기");
  };

  const handleEvent = () => {
    alert("팝업오픈");
  };

  return (
    <>
      <CradLayout>
        <CardHeader>
          <div>
            <span className="Author">홍길동</span>
            <span className="CreationDate">2024.09.23</span>
          </div>
          <button onClick={handleEvent}>
            <MoreHorizIcon />
          </button>
        </CardHeader>
        <CardSlide>
          <img src="img/no_img.png" alt="" />
        </CardSlide>
        <CardDesc>
          <CardButton />
          <PosrComment />
          <button className="comment__open" onClick={handleComment}>
            댓글 모두 보기
          </button>
        </CardDesc>
      </CradLayout>
    </>
  );
};

export default PostCard;
