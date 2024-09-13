"use client";

import styled from "styled-components";
import React from "react";
import SwiperMain from "@/components/common/SwiperMain";

const Main = () => {
  const Introcontainer = styled.div`
    position: relative;
    overflow: hidden;
    height: 100vh;
    user-select: "none";
    pointer-events: "none";
  `;

  return (
    <>
      <Introcontainer>
        <SwiperMain />
      </Introcontainer>
    </>
  );
};

export default Main;
