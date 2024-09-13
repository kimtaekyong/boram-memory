"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slideData = [
  { id: 1, src: "/images/slide1.jpg", alt: "Slide 1" },
  { id: 2, src: "/images/slide2.jpg", alt: "Slide 2" },
  { id: 3, src: "/images/slide3.jpg", alt: "Slide 3" },
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
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        autoplay={autoplayEnabled ? { delay: 3000, disableOnInteraction: false } : false}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id} className="h-20">
            <img src={slide.src} alt={slide.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <button onClick={handleAutoplayToggle}>{autoplayEnabled ? "Stop Autoplay" : "Start Autoplay"}</button>
        <button onClick={goToPreviousSlide}>Previous Slide</button>
        <button onClick={goToNextSlide}>Next Slide</button>
      </div>
    </div>
  );
};

export default SwiperUser;
