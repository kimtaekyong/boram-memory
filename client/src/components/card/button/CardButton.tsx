import React from "react";
import styled from "styled-components";
import LikeButton from "./LikeButton";
import CommentSection from "./CommentSection";
import ShareButton from "./ShareButton";

const ButtonContainer = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 8px;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
  }
`;

const CardButton = () => {
  return (
    <ButtonContainer>
      <li>
        <LikeButton />
      </li>
      <li>
        <CommentSection />
      </li>
      <li>
        <ShareButton />
      </li>
    </ButtonContainer>
  );
};

export default CardButton;
