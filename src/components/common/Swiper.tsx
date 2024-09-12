"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Outlined from "./button/Outlined";
import { useRouter } from "next/navigation";
import styled from "styled-components";

// 텍스트와 이미지 데이터를 함께 담은 배열
const slideData = [
  {
    id: 1,
    text: "고인과 함께 했던 추억을 온라인 공간에 보관하여 공유, <br />오랫동안 간직하세요.",
    image: "/img/memory_01.png",
  },
  {
    id: 2,
    text: "고인과 관련 된 일정 혹은 지인들과의 기념일을<br />등록하고 공유하세요.",
    image: "/img/memory_02.png",
  },
  {
    id: 3,
    text: "고인의 생전 모습과 장례행사 과정을 담은<br /> 앨범과 영상을 보실 수 있습니다.",
    image: "/img/memory_03.png",
  },
];

const SwiperTitle = styled.div`
  position: absolute;
  color: #fff;
  width: 100%;
  padding: 0 24px;
  text-align: center;
`;

const SwiperBtn = styled.div`
  position: absolute;
  left: 50%;
  top: 75%;
  transform: translateX(-50%);
  z-index: 1;
`;

const SwiperComponent = () => {
  const router = useRouter();
  const handleEvent = () => {
    router.push("/logoutMain");
  };
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        speed={2000}
      >
        {slideData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center justify-center h-full">
              <img src={item.image} alt={`Slide ${item.id}`} className="w-full h-[100vh] object-cover saturate-50" />
              <SwiperTitle>
                <div className="text-4xl font-bold" dangerouslySetInnerHTML={{ __html: item.text }}></div>
              </SwiperTitle>
            </div>
          </SwiperSlide>
        ))}
        <SwiperBtn>
          <Outlined onClick={handleEvent} text="추모관 입장하기" color={""} />
        </SwiperBtn>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
