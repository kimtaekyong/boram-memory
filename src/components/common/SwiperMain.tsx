"use client";

import React, { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Outlined from "./button/Outlined";
import { useRouter } from "next/navigation";
import styled, { keyframes, css } from "styled-components";

// 애니메이션 정의
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(150px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
// 텍스트와 이미지 데이터를 함께 담은 배열
const slideData = [
  {
    id: 1,
    title: "추억",
    text: "고인과 함께 했던 추억을 온라인 공간에 보관하여 공유, <br />오랫동안 간직하세요.",
    image: "/img/memory_03.png",
  },
  {
    id: 2,
    title: "기념",
    text: "고인과 관련 된 일정 혹은 지인들과의 기념일을<br />등록하고 공유하세요.",
    image: "/img/memory_02.png",
  },
  {
    id: 3,
    title: "장례",
    text: "고인의 생전 모습과 장례행사 과정을 담은<br /> 앨범과 영상을 보실 수 있습니다.",
    image: "/img/memory_01.png",
  },
];

// `animate` 속성 타입 정의
interface SwiperTitleProps {
  animate?: boolean;
}

const Swiperheader = styled.div`
  position: fixed;
  left: 0;
  top: 0%;
  width: 100%;
  padding: 0 24px;
  z-index: 1;
  background: rgba(31, 31, 31, 0.45);
  backdrop-filter: blur(5px) brightness(0.5);
  .intro__header {
    max-width: 1280px;
    margin: 0 auto;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      border: 1px solid #fff;
      border-radius: 20px;
      padding: 8px 24px;
    }
  }
`;
const SwiperTitle = styled.div<SwiperTitleProps>`
  position: absolute;
  color: #fff;
  width: 100%;
  max-width: 1280px;
  line-height: 1.3;
  padding: 24px;
  bottom: 5%;
  ${(props) =>
    props.animate &&
    css`
      animation: ${fadeInUp} 1s ease-in-out;
    `}
`;
const SwiperFixed = styled.div`
  width: 100%;
  text-align: center;
  max-width: 1280px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  .intro__desc {
    color: #eee;
    margin-bottom: 32px;
    h4 {
      margin-bottom: 6px;
    }
    h2 {
      line-height: 1.3;
    }
  }
`;
const SwiperComponent = () => {
  const router = useRouter();
  const [animate, setAnimate] = useState(false);

  const handleEvent = () => {
    router.push("/logoutMain");
  };
  const handleSlideChange = useCallback(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 1000); // 애니메이션이 끝난 후 애니메이션 상태를 false로 설정
    return () => clearTimeout(timer); // 타이머 클리너
  }, []);
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        speed={2000}
        onSlideChange={handleSlideChange} // 슬라이드 변경 시 호출
        allowTouchMove={false} // 스와이프 비활성화
      >
        <Swiperheader>
          <div className="intro__header">
            <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_58_3361)">
                <path
                  d="M22.1025 19.7696C28.0564 18.5453 27.2968 13.9989 27.2968 13.9989C26.4925 9.64657 21.6855 10.2326 21.6855 10.2326C23.0892 7.87354 22.6871 5.85416 22.6871 5.85416C21.3206 0.497748 16.171 0.717977 16.171 0.717977C9.09644 0.792631 7.53631 11.4308 7.53631 11.4308C3.68251 6.24609 0.53246 6.46632 0.53246 6.46632C-0.394685 6.44019 0.16756 6.88065 0.16756 6.88065C1.72769 7.127 2.21919 8.8851 2.21919 8.8851C2.24526 9.76601 2.6325 9.62044 2.6325 9.62044C3.29527 9.44874 4.07348 9.66896 4.07348 9.66896C6.3932 10.3558 7.68525 13.801 7.68525 13.801C8.32196 15.268 8.48952 18.9372 8.48952 18.9372C8.66079 21.188 10.6156 21.1395 10.6156 21.1395C12.8348 21.1134 12.8609 19.3777 12.8609 19.3777L13.2034 15.5144C13.6428 11.4047 14.596 9.08293 14.596 9.08293C16.279 4.48426 18.8892 4.70449 18.8892 4.70449C21.5477 4.65596 21.3541 7.17553 21.3541 7.17553C21.3541 9.8668 18.5727 12.8753 18.5727 12.8753C23.3536 9.98624 23.0632 13.6555 23.0632 13.6555C23.2345 17.056 16.5024 19.7435 16.5024 19.7435C25.0403 20.3295 26.2356 23.1178 26.2356 23.1178C26.4553 23.409 26.7978 23.2186 26.7978 23.2186C26.9207 23.0208 27.7734 22.7782 27.7734 22.7782C28.2351 22.6065 28.1383 22.4572 28.1383 22.4572C26.6973 20.5012 22.1137 19.7696 22.1137 19.7696"
                  fill="white"
                />
                <path
                  d="M39.7034 8.43343H49.3919V10.3072H39.7034V8.43343ZM35.332 11.1882C35.332 11.1882 35.332 11.1956 35.332 11.1994V11.3711C35.332 12.726 36.4305 13.8272 37.7821 13.8272H49.8126L53.7669 13.8234V3.53241C53.7669 3.53241 53.7669 3.46149 53.7558 3.35324V3.2226C53.7558 2.63657 53.2829 2.16252 52.6983 2.16252H50.4791C49.8945 2.16252 49.4254 2.63657 49.4216 3.21887C49.3881 3.40177 49.3919 3.53615 49.3919 3.53615V3.7825V4.93964H39.7034V3.53241C39.7034 3.53241 39.7108 3.35698 39.6587 3.12928C39.6066 2.62537 39.2044 2.22597 38.698 2.18491C38.6087 2.16998 38.5156 2.15878 38.4113 2.15878H36.6241C36.531 2.15878 36.4491 2.16625 36.3672 2.17745C35.7937 2.18864 35.332 2.65896 35.332 3.23753V3.45403C35.332 3.50255 35.332 3.52868 35.332 3.52868V11.1844V11.1882Z"
                  fill="white"
                />
                <path
                  d="M53.4765 17.5263H46.711V14.4393H42.3731V17.5263H35.6039C35.0193 17.5263 34.5464 18.0003 34.5464 18.5863V20.337C34.5464 20.923 35.0193 21.3971 35.6039 21.3971H53.4728C54.0574 21.3971 54.5303 20.923 54.5303 20.337V18.5863C54.5303 18.0003 54.0574 17.5263 53.4728 17.5263"
                  fill="white"
                />
                <path
                  d="M97.0522 17.6084H95.5926C96.1325 16.4326 96.5012 14.8424 96.6948 13.0806V13.0694C96.6948 13.0694 96.6948 13.0619 96.6948 13.0582V5.98103H96.7097V3.39428C96.7097 2.80825 96.2368 2.3342 95.6522 2.3342H80.5312C79.9466 2.3342 79.4737 2.80825 79.4737 3.39428V4.92095C79.4737 5.50698 79.9466 5.98103 80.5312 5.98103H92.3607V11.9085C92.342 12.558 92.2936 13.2075 92.1745 13.913C91.9548 14.9395 91.6048 16.399 91.0947 17.6084H79.5854C79.0008 17.6084 78.528 18.0824 78.528 18.6684V20.2959C78.528 20.8819 79.0008 21.356 79.5854 21.356H97.0522C97.6368 21.356 98.1097 20.8819 98.1097 20.2959V18.6684C98.1097 18.0824 97.6368 17.6084 97.0522 17.6084Z"
                  fill="white"
                />
                <path
                  d="M63.0309 16.9253H70.9582V18.2056H63.0309V16.9253ZM75.2961 4.93215C75.2961 3.27484 73.9556 1.92734 72.2987 1.92734H70.2694C70.6789 2.15503 70.9582 2.57309 70.9582 3.05461V9.96382H61.8059V9.13516H69.6327V7.9407H69.6438V3.84594C69.6438 3.80861 69.6364 3.77502 69.6327 3.73769V3.21512C69.6327 2.62908 69.1598 2.15503 68.5752 2.15503H58.5293C57.9447 2.15503 57.4718 2.62908 57.4718 3.21512V4.15202C57.4718 4.73805 57.9447 5.2121 58.5293 5.2121H65.306V6.07062H58.5293C57.9447 6.07062 57.4718 6.54467 57.4718 7.13071V10.5648C57.4718 11.9235 58.5702 13.0209 59.9218 13.0209H70.9582V13.7749H58.6968V14.2303V18.7319V19.4672C58.6968 20.5087 59.5383 21.356 60.5809 21.356H75.2998V9.14262H77.1019V5.93998H75.2998V4.93215H75.2961Z"
                  fill="white"
                />
                <path
                  d="M100.303 9.3218C100.303 10.2102 101.033 10.9269 101.934 10.9269H117.494C118.038 10.9269 118.477 10.4939 118.477 9.96009V9.3218C118.477 8.78802 118.038 8.35503 117.494 8.35503H104.644V7.85112H117.23C117.814 7.85112 118.287 7.38453 118.287 6.8097V3.24125C118.287 2.66642 117.814 2.19983 117.23 2.19983H101.364C100.779 2.19983 100.307 2.66642 100.307 3.24125V3.73023C100.307 4.30507 100.779 4.77165 101.364 4.77165H114.143V5.27556H101.364C100.779 5.27556 100.307 5.74215 100.307 6.31698V6.80597C100.307 6.80597 100.307 6.82463 100.307 6.8321V9.29194C100.307 9.29194 100.307 9.3106 100.307 9.31807"
                  fill="white"
                />
                <path
                  d="M118.943 11.3039H100.173C99.588 11.3039 99.1151 11.7779 99.1151 12.3639V12.9127C99.1151 13.4987 99.588 13.9727 100.173 13.9727H107.396V14.9806H111.734V13.9727H118.943C119.527 13.9727 120 13.4987 120 12.9127V12.3639C120 11.7779 119.527 11.3039 118.943 11.3039Z"
                  fill="white"
                />
                <path
                  d="M114.329 18.6274H104.849V18.1123H114.329V18.6274ZM117.606 14.3124H115.387C114.802 14.3124 114.329 14.7865 114.329 15.3725H104.849C104.849 14.7865 104.376 14.3124 103.792 14.3124H101.573C100.988 14.3124 100.515 14.7865 100.515 15.3725V19.2433C100.515 20.3295 101.305 21.2216 102.34 21.3971C102.425 21.4194 102.511 21.4344 102.604 21.4344H116.474C116.474 21.4344 116.481 21.4344 116.485 21.4344H118.667V15.3725C118.667 14.7865 118.194 14.3124 117.61 14.3124"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_58_3361">
                  <rect width="120" height="22.5641" fill="white" transform="translate(0 0.717957)" />
                </clipPath>
              </defs>
            </svg>
            <h2 className="text-lg font-medium text-Background">보람 온라인 추모관</h2>
          </div>
        </Swiperheader>
        <SwiperFixed>
          <div className="intro__desc">
            <h4 className="text-2xl">떠나 간 소중한 분과 행복한 추억을 되새기는 공간입니다.</h4>
            <h2 className="text-8xl font-[900] ">
              소중한 순간을 공유하고
              <br />
              함께 나누세요.
            </h2>
          </div>
          <Outlined onClick={handleEvent} text="추모관 입장하기" width={"200px"} height={"60px"} color={"#0064FF"} />
        </SwiperFixed>
        {slideData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="select-none pointer-events-none	 flex flex-col items-center justify-center h-full relative">
              <img src={item.image} alt={`Slide ${item.id}`} className="w-full h-[100vh] object-cover" />
              <SwiperTitle animate={animate}>
                <div className="pl-1 text-xl mb-2 font-medium">{item.title}</div>
                <div className="text-3xl font-thin" dangerouslySetInnerHTML={{ __html: item.text }}></div>
              </SwiperTitle>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
