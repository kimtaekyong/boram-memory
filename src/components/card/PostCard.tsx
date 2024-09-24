import React from "react";

import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PosrComment from "./PosrComment";

const CradLayout = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 4px;
`;

const CardHeader = styled.div`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    column-gap: 8px;
    span {
      font-weight: 700;
      font-size: 16px;
      &:last-child {
        font-weight: 300;
      }
    }
  }
`;

const CardSlide = styled.div`
  overflow: hidden;
  img {
    height: 100%;
    max-height: 480px;
  }
`;

const CardDesc = styled.div`
  padding: 18px 24px;
  .comment__open {
    color: rgba(31, 31, 31, 0.85);
    font-weight: 500;
    font-size: 16px;
    padding-bottom: 4px;
  }
`;

const LinkArea = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 18px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }
`;

const PostCard = () => {
  const handleComment = () => {
    console.log("댓글 모두 보기");
  };
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
              <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.8725 3.15889L11.2175 2.39329C8.58142 -0.242748 4.37761 -0.0631158 1.74157 2.57292C-0.894471 5.20896 -0.387159 10.3053 2.24888 12.9413C3.31874 14.0112 4.92092 15.4925 7.05542 17.3853L8.85115 18.965L10.8681 20.7158C11.4234 21.1951 12.2439 21.2024 12.8077 20.7331L14.4416 19.3632C17.3029 16.9451 19.4262 15.0404 20.8115 13.6492L21.171 13.2825L21.4939 12.9413C23.9489 10.2939 24.5798 5.14766 22.005 2.57292L21.8185 2.39329C19.1711 -0.0616901 15.179 -0.181445 12.6042 2.39329L11.8725 3.15889ZM2.80223 3.63358C4.88666 1.54915 8.11137 1.45143 10.118 3.41561L11.8111 5.39427L13.6886 3.42966C15.6145 1.50434 18.6838 1.53217 20.7986 3.49317L20.9645 3.65336C22.7839 5.47316 22.4744 9.6779 20.394 11.9214L20.0815 12.2515L19.7348 12.605C18.5864 13.7575 16.8845 15.3016 14.6405 17.2245L13.4734 18.2175L11.8481 19.5802L9.83442 17.8323L8.39319 16.5662C6.36239 14.7714 4.79575 13.3358 3.69885 12.2651L3.30954 11.8807C1.138 9.70913 0.866398 5.56941 2.80223 3.63358Z"
                  fill="#1f1f1f"
                />
              </svg>
            </button>
            <button>
              <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22 11.5C22 5.42487 17.0751 0.5 11 0.5C4.92487 0.5 0 5.42487 0 11.5C0 17.5751 4.92487 22.5 11 22.5C12.326 22.5 14.1475 22.0163 16.4645 21.0489L20.2113 22.5104L20.3223 22.5465C20.8067 22.6735 21.3199 22.42 21.5063 21.9422C21.5808 21.7511 21.5948 21.5418 21.5464 21.3425L20.5016 17.046L20.6727 16.6367C21.5576 14.4813 22 12.7691 22 11.5ZM19.2714 16.1004L18.9265 16.9169L19.862 20.7641L16.4454 19.4313L15.5123 19.8183C13.5445 20.6124 12.0245 21 11 21C5.75329 21 1.5 16.7467 1.5 11.5C1.5 6.25329 5.75329 2 11 2C16.2467 2 20.5 6.25329 20.5 11.5C20.5 12.5455 20.097 14.0952 19.2714 16.1004Z"
                  fill="#1f1f1f"
                />
              </svg>
            </button>
            <button>
              <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.1226 1.62889L12.4374 19.8824C12.101 20.4571 11.2383 20.341 11.0658 19.6978L8.31543 9.44223L8.29276 9.41018C8.27233 9.37479 8.25511 9.33844 8.24101 9.30145L0.721173 1.78033C0.2487 1.30786 0.583325 0.5 1.2515 0.5H22.4754C23.0547 0.5 23.4153 1.1289 23.1226 1.62889ZM20.4224 3.27211L9.85082 9.37561L12.0496 17.5758L20.4224 3.27211ZM3.06216 2L19.6274 1.99907L9.12507 8.06257L3.06216 2Z"
                  fill="#1f1f1f"
                />
              </svg>
            </button>
          </LinkArea>
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
