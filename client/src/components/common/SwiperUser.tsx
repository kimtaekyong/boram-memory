"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { styled } from "styled-components";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import StopCircleOutlinedIcon from "@mui/icons-material/StopCircleOutlined";

const SlideWrap = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 480px;
`;

const SlideController = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 14px;
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 4px;
  .swiper-pagination {
    all: unset;
    display: flex;
    align-items: center;
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: white;
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
  }
`;

const slideData = [
  { id: 1, src: "/img/memory_01.png", alt: "Slide 1" },
  { id: 2, src: "/img/memory_02.png", alt: "Slide 2" },
  { id: 3, src: "/img/memory_03.png", alt: "Slide 3" },
];

const SwiperUser: React.FC = () => {
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const swiperRef = useRef<any>(null);

  const handleAutoplayToggle = () => {
    if (swiperRef.current) {
      if (autoplayEnabled) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
      setAutoplayEnabled(!autoplayEnabled);
    }
  };

  // const goToNextSlide = () => {
  //   if (swiperRef.current) {
  //     swiperRef.current.slideNext();
  //   }
  // };

  // const goToPreviousSlide = () => {
  //   if (swiperRef.current) {
  //     swiperRef.current.slidePrev();
  //   }
  // };

  return (
    <div>
      <SlideWrap>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          speed={3000}
          loop={true}
          autoplay={autoplayEnabled ? { delay: 5000, disableOnInteraction: false } : false}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          modules={[Autoplay, Pagination]}
          className="h-full"
          allowTouchMove={false} // 스와이프 비활성화
        >
          {slideData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.src} alt={slide.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
        <SlideController>
          <div className="swiper-pagination"></div> {/* 커스텀된 pagination 위치 */}
          <button onClick={handleAutoplayToggle}>
            {autoplayEnabled ? <PlayCircleFilledWhiteOutlinedIcon /> : <StopCircleOutlinedIcon />}
          </button>{" "}
          {/* <button onClick={goToPreviousSlide}>Previous Slide</button>
          <button onClick={goToNextSlide}>Next Slide</button> */}{" "}
        </SlideController>
      </SlideWrap>
    </div>
  );
};

export default SwiperUser;
