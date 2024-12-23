"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { styled } from "styled-components";
// import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
// import StopCircleOutlinedIcon from "@mui/icons-material/StopCircleOutlined";

const SlideWrap = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 40px auto 0;
  overflow: hidden;
  position: relative;
  height: 680px;
  border-radius: 14px;
`;

// const SlideController = styled.div`
//   position: absolute;
//   z-index: 10;
//   bottom: 14px;
//   color: #fff;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   column-gap: 4px;
//   .swiper-pagination {
//     all: unset;
//     display: flex;
//     align-items: center;
//   }
//   .swiper-pagination-bullet {
//     width: 10px;
//     height: 10px;
//     background-color: white;
//     opacity: 0.5;
//     transition: opacity 0.3s ease;
//   }
//   .swiper-pagination-bullet-active {
//     opacity: 1;
//   }
// `;

const SlideContaxt = styled.div`
  position: absolute;
  color: #fff;
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);
  bottom: 15%;
  width: 100%;
  max-width: 1196px;
  font-family: "GowunBatang-Regular";
  .slideText {
    margin-bottom: 24px;
    h2 {
      font-size: 42px;
      font-weight: 700;
      margin-bottom: 8px;
    }
    p {
      font-size: 18px;
    }
  }
  .slide-controller {
    display: flex;
    button {
    }
  }
`;

const slideData = [
  { id: 1, src: "/img/main_page_slide_01.png", alt: "Slide 1" },
  { id: 2, src: "/img/memory_02.png", alt: "Slide 2" },
  { id: 3, src: "/img/memory_03.png", alt: "Slide 3" },
];

const SwiperUser: React.FC = () => {
  // const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const swiperRef = useRef<any>(null);

  // const handleAutoplayToggle = () => {
  //   if (swiperRef.current) {
  //     if (autoplayEnabled) {
  //       swiperRef.current.autoplay.stop();
  //     } else {
  //       swiperRef.current.autoplay.start();
  //     }
  //     setAutoplayEnabled(!autoplayEnabled);
  //   }
  // };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goToPreviousSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div>
      <SlideWrap>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          speed={2500}
          loop={true}
          // autoplay={autoplayEnabled ? { delay: 5000, disableOnInteraction: false } : false}
          // pagination={{ el: ".swiper-pagination", clickable: true }}
          // modules={[Autoplay, Pagination]}
          className="h-full"
          allowTouchMove={false} // 스와이프 비활성화
        >
          {slideData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.src} alt={slide.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/*        <SlideController>
          <div className="swiper-pagination"></div>
          <button onClick={handleAutoplayToggle}>
            {autoplayEnabled ? <PlayCircleFilledWhiteOutlinedIcon /> : <StopCircleOutlinedIcon />}
          </button>
        </SlideController>*/}
        <SlideContaxt>
          <div className="slideText">
            <h2>보람온라인추모관</h2>
            <p>
              사랑하는 사람과 행복했던 추억을 다시 살리는 공간입니다.
              <br />
              함께했던 순간, 행복하고 고마웠던
              <br />
              추억들을 만들어 가까운 분들과 공유하세요.
            </p>
          </div>
          <div className="slide-controller">
            <button onClick={goToPreviousSlide}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M31.5 17.9999C31.5 10.5468 25.4531 4.49989 18 4.49989C10.5469 4.4999 4.5 10.5468 4.5 17.9999C4.5 25.453 10.5469 31.4999 18 31.4999C25.4531 31.4999 31.5 25.453 31.5 17.9999Z"
                  stroke="white"
                  strokeMiterlimit="10"
                />
                <path d="M20.8126 11.25L14.0626 18L20.8126 24.75" stroke="white" strokeLinejoin="round" />
              </svg>
            </button>
            <button onClick={goToNextSlide}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.5 18.0001C4.5 25.4532 10.5469 31.5001 18 31.5001C25.4531 31.5001 31.5 25.4532 31.5 18.0001C31.5 10.547 25.4531 4.50011 18 4.50011C10.5469 4.50011 4.5 10.547 4.5 18.0001Z"
                  stroke="white"
                  strokeMiterlimit="10"
                />
                <path d="M15.1874 24.75L21.9374 18L15.1874 11.25" stroke="white" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </SlideContaxt>
      </SlideWrap>
    </div>
  );
};

export default SwiperUser;
