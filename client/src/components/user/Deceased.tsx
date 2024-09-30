import React from "react";
import styled from "styled-components";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// 스타일 컴포넌트 정의
const DeceasedList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  li {
    padding: 16px 0;
    border-bottom: 1px solid #e5e5e5;
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      border-bottom: none;
    }
  }
`;

const DeceasedDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .img__box {
    display: flex;
    column-gap: 12px;
    align-items: center;
    img {
      width: 64px;
      height: 64px;
      background-color: #e5e5e5;
      border-radius: 50%;
    }
    .item__wrap {
      width: 100%;
      .item {
        margin-bottom: 2px;
        p {
          font-size: 16px;
          font-weight: 700;
          color: rgba(31, 31, 31, 0.85);
          line-height: 1.55;
          &:last-child {
            font-weight: 500;
            font-size: 16px;
          }
        }
      }
    }
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    background-color: #0064ff;
    color: #fff;
    padding: 0px 18px;
    height: 38px;
    font-size: 14px;
    border-radius: 4px;
  }
`;

// 고인 정보를 나타내는 데이터 배열
const deceasedData = [
  { id: 1, img: "/img/no_img.png", Deadname: "故 고인명1 (성별) 님" },
  { id: 2, img: "/img/no_img.png", Deadname: "故 고인명2 (성별) 님" },
  { id: 3, img: "/img/no_img.png", Deadname: "故 고인명3 (성별) 님" },
  { id: 4, img: "/img/no_img.png", Deadname: "故 고인명4 (성별) 님" },
];

const Deceased = () => {
  const handleView = (deceased: { id: number; img: string; Deadname: string }) => {
    console.log("고인 정보:", deceased);
  };
  return (
    <>
      <DeceasedList>
        {deceasedData.map((deceased, id) => (
          <li key={id}>
            <DeceasedDate>
              <div className="img__box">
                <img src={deceased.img} alt={"이미지없음"} />
                <div className="item__wrap">
                  <div className="item">
                    <p>고인명</p>
                    <p>{deceased.Deadname}</p>
                  </div>
                </div>
              </div>
              <button onClick={() => handleView(deceased)}>
                자세히
                <KeyboardArrowRightIcon sx={{ width: "18px", height: "18px" }} />
              </button>
            </DeceasedDate>
          </li>
        ))}
      </DeceasedList>
    </>
  );
};

export default Deceased;
