"use client";

import { useState, useEffect, useRef } from "react";
import { styled } from "styled-components";

const CommentArea = styled.div`
  padding: 6px 0 16px 0;
`;

const Comment = ({ text }: { text: string }) => {
  const [isExpanded, setIsExpanded] = useState(false); // 텍스트 펼침 여부 상태 관리
  const [isOverflowing, setIsOverflowing] = useState(false); // 텍스트가 제한된 가로폭을 넘는지 여부
  const textRef = useRef<HTMLParagraphElement>(null); // 텍스트를 참조할 ref

  useEffect(() => {
    const element = textRef.current;
    if (element) {
      const actualWidth = element.scrollWidth; // 실제 너비 계산
      const maxAllowedWidth = parseFloat(getComputedStyle(element).width); // 허용된 최대 너비
      setIsOverflowing(actualWidth > maxAllowedWidth); // 텍스트가 넘치는지 여부 설정
    }
  }, [text]);

  const toggleText = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <>
      <CommentArea>
        <p
          ref={textRef}
          style={{
            whiteSpace: isExpanded ? "pre-wrap" : "", // 자세히 보기가 아닐 때 한 줄로 유지
            overflow: "hidden", // 줄 수 제한
            textOverflow: "ellipsis", // 넘친 텍스트 생략 처리
            width: "100%", // 가로폭 조정
            maxWidth: "680px", // 최대 가로폭 설정 (필요에 따라 조정 가능)
            maxHeight: isExpanded ? "none" : "50px", // 기본적으로 50px로 제한
            lineHeight: "1.25rem", // 줄 높이 조정
          }}
        >
          <span>홍길동: </span>
          {text}
        </p>
      </CommentArea>
      {/* 텍스트가 제한된 가로폭을 넘는 경우에만 "자세히 보기" 버튼을 보여줌 */}
      {isOverflowing && (
        <button className="mt-2" onClick={toggleText}>
          {isExpanded ? "간략히 보기" : "자세히 보기"}
        </button>
      )}
    </>
  );
};

const CommentList = () => {
  const comments = [
    "오늘살아생전에 조금 더 잘해드리지 못한 제가 원망스럽네요. 따라 많이 생각나네요 이렇게 글을 쓰는데도 많은 생각이 납니다. 다음 생에 다시 만났으면 좋겠습니다. 오늘살아생전에 조금 더 잘해드리지 못한 제가 원망스럽네요. 따라 많이 생각나네요 이렇게 글을 쓰는데도 많은 생각이 납니다. 다음 생에 다시 만났으면 좋겠습니다.",
  ];

  return (
    <div>
      {comments.map((comment, index) => (
        <Comment key={index} text={comment} />
      ))}
    </div>
  );
};

export default CommentList;
