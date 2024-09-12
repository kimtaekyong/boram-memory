"use client";

import styled from "styled-components";
import React from "react";
import Swiper from "@/components/common/Swiper";

const intro = () => {
  const Introcontainer = styled.div`
    position: relative;
    overflow: hidden;
    height: 100vh;
    span {
      position: absolute;
      top: 0;
      z-index: 1000;
    }
  `;

  return (
    <>
      <Introcontainer>
        <Swiper />
      </Introcontainer>
    </>
  );
};

export default intro;
