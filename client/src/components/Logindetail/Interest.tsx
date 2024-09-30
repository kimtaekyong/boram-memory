import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "styled-components";

const items = [
  { id: 1, title: "저장 된 게시물 01", desc: "저장 된 게시물 내용", img: "/img/no_img.png" },
  { id: 2, title: "저장 된 게시물 02", desc: "저장 된 게시물 내용", img: "/img/no_img.png" },
  { id: 3, title: "저장 된 게시물 03", desc: "저장 된 게시물 내용", img: "/img/no_img.png" },
  { id: 4, title: "저장 된 게시물 04", desc: "저장 된 게시물 내용", img: "/img/no_img.png" },
];

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
const ComponentItem = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 12px;
  li {
    width: calc(100% / 2 - 12px);
    img {
      max-height: 200px;
      border-radius: 4px;
    }
    span {
      display: block;
      padding: 8px 0 12px 0;
      h2 {
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 0.2px;
      }
      p {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;
      }
    }
  }
`;

const Interest = () => {
  const handleAdd = () => {
    console.log("관심게시물 추가");
  };

  return (
    <>
      <ComponentLayout>
        <ComponentTitle>
          <h2>저장 된 게시물</h2>
          <button onClick={handleAdd}>
            게시물추가
            <AddIcon sx={{ color: "fff", width: 20, height: 20 }} />
          </button>
        </ComponentTitle>
        <ComponentItem>
          {items.map((item) => (
            <li key={item.id}>
              <img src={item.img} alt={`item ${item.id}`} />
              <span>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </span>
            </li>
          ))}
        </ComponentItem>
      </ComponentLayout>
    </>
  );
};

export default Interest;
