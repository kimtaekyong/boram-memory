import React, { useState } from "react";
import styled from "styled-components";

// 스타일링된 버튼 컴포넌트
const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// 스타일링된 카운트 컴포넌트
const Count = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #1f1f1f;
  margin-top: 4px;
`;

// 모달 컴포넌트 스타일링
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
`;

const CloseButton = styled.button`
  background: #ff5a5a;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const CommentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;
  li {
    padding: 5px 0;
    font-size: 14px;
    color: #333;
  }
`;

// 모달 컴포넌트 정의
interface ModalProps {
  onClose: (comment: string[]) => void;
  existingComments: string[]; // 기존 댓글을 받을 수 있는 prop
}

const Modal: React.FC<ModalProps> = ({ onClose, existingComments }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [comments, setComments] = useState<string[]>(existingComments); // 기존 댓글 받아서 관리

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddComment = () => {
    if (inputValue.trim()) {
      const updatedComments = [...comments, inputValue]; // 댓글 추가
      setComments(updatedComments);
      setInputValue(""); // 입력창 초기화
      // onClose는 이곳에서 호출하지 않음
    }
  };

  const handleClose = () => {
    onClose(comments); // 작성된 댓글을 CommentSection으로 전달하고 모달 닫기
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CommentList>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </CommentList>
        <Input type="text" value={inputValue} onChange={handleInputChange} placeholder="댓글 입력" />
        <CloseButton onClick={handleAddComment}>댓글 추가</CloseButton>
        <CloseButton onClick={handleClose}>닫기</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

// CommentSection 컴포넌트
const CommentSection: React.FC = () => {
  const [commentCount, setCommentCount] = useState<number>(0);
  const [comments, setComments] = useState<string[]>([]); // 전체 댓글 리스트를 관리
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  // 모달 열기
  const handelComment = () => {
    setModalOpen(true);
  };

  // 모달 닫기 및 댓글 카운트 업데이트
  const closeModal = (newComments: string[]) => {
    setModalOpen(false);
    setComments(newComments); // 새로 작성된 댓글을 저장
    setCommentCount(newComments.length); // 댓글 카운트를 업데이트
  };

  return (
    <div style={{ display: "flex", alignItems: "center", columnGap: "4px" }}>
      <Button onClick={handelComment}>
        <svg width="28" height="28" viewBox="-1 -1 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 14C25 7.92487 20.0751 3 14 3C7.92487 3 3 7.92487 3 14C3 20.0751 7.92487 25 14 25C15.326 25 17.1475 24.5163 19.4645 23.5489L23.2113 25.0104L23.3223 25.0465C23.8067 25.1735 24.3199 24.92 24.5063 24.4422C24.5808 24.2511 24.5948 24.0418 24.5464 23.8425L23.5016 19.546L23.6727 19.1367C24.5576 16.9813 25 15.2691 25 14ZM22.2714 18.6004L21.9265 19.4169L22.862 23.2641L19.4454 21.9313L18.5123 22.3183C16.5445 23.1124 15.0245 23.5 14 23.5C8.75329 23.5 4.5 19.2467 4.5 14C4.5 8.75329 8.75329 4.5 14 4.5C19.2467 4.5 23.5 8.75329 23.5 14C23.5 15.0455 23.097 16.5952 22.2714 18.6004Z"
            fill="#1F1F1F"
          />
        </svg>
      </Button>
      <Count>{commentCount}</Count>
      {/* 모달이 열렸을 때만 모달을 표시 */}
      {isModalOpen && <Modal onClose={closeModal} existingComments={comments} />}
    </div>
  );
};

export default CommentSection;
