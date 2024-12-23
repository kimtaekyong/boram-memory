import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledMemberItem = styled.li`
  width: calc(100% / 4 - 12px);
  min-height: 480px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  img {
    overflow: hidden;
    height: 400px;
  }
  .userContaxt {
    padding: 14px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user-info {
      display: flex;
      align-items: center;
      column-gap: 12px;
      .user-icon {
        width: 42px;
        height: 42px;
        border-radius: 50px;
        img {
          width: 100%;
          height: auto;
        }
      }
      .user-data {
        p {
          font-size: 12px;
          color: #c3c3c6;
        }
        h3 {
          font-size: 16px;
          font-weight: 700;
          color: #283c50;
          letter-spacing: -1.25px;
        }
      }
    }
    button {
      background-color: #283c50;
      padding: 0 14px;
      height: 32px;
      border-radius: 6px;
      color: #fff;
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

// member의 타입 정의
interface Member {
  id: number;
  Deceased: string;
  Sangju: string;
  image: string;
}

interface Props {
  member: Member;
}

const MemberItem: React.FC<Props> = ({ member }) => {
  return (
    <StyledMemberItem>
      <div className="userImg">
        <img src={member.image} alt={member.Deceased} />
      </div>
      <div className="userContaxt">
        <div className="user-info">
          <div className="user-icon">
            <img src="/img/userDummy-icon.png" alt="" />
          </div>
          <div className="user-data">
            <p>상주 {member.Sangju}</p>
            <h3>{member.Deceased}</h3>
          </div>
        </div>
        <Link href={`/user/${member.id}`}>
          <button>입장</button>
        </Link>
      </div>
    </StyledMemberItem>
  );
};

export default MemberItem;
