import React from "react";

import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PosrComment from "./PosrComment";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const CradLayout = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 4px;
`;

const CardHeader = styled.div`
  padding: 16px 12px;
  display: flex;
  justify-content: space-between;
`;

const CardSlide = styled.div`
  overflow: hidden;
  img {
    height: 100%;
    max-height: 280px;
  }
`;

const CardDesc = styled.div`
  padding: 8px 12px;
`;

const LinkArea = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 8px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
  }
`;

const PostCard = () => {
  return (
    <>
      <CradLayout>
        <CardHeader>
          <div>
            <span className="Author">홍길동</span>
            <span className="CreationDate">2024-09-23</span>
          </div>
          <button>
            <MoreVertIcon />
          </button>
        </CardHeader>
        <CardSlide>
          <img src="img/no_img.png" alt="" />
        </CardSlide>
        <CardDesc>
          <LinkArea>
            <button>
              <FavoriteBorderIcon sx={{}} />
            </button>
            <button>
              <ChatBubbleOutlineIcon />
            </button>
            <button>
              <ShareIcon />
            </button>
          </LinkArea>
          <PosrComment />
        </CardDesc>
      </CradLayout>
    </>
  );
};

export default PostCard;
