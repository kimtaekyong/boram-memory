// src/components/MetaTags.tsx
import React from "react";

const MetaTags: React.FC = () => {
  return (
    <>
      <title>보람상조 온라인추모관</title>
      <meta
        name="Description"
        content="보람상조는 단지 행사만 치러드리는 것이 아닙니다. 사랑과 효의 마지막 모습들을 전문가의 손길과 정성을 담아 인터넷 추모관에 간직해드립니다."
      />
      <meta property="og:title" content="보람상조 온라인추모관" />
      <meta
        property="og:description"
        content="보람상조는 단지 행사만 치러드리는 것이 아닙니다. 사랑과 효의 마지막 모습들을 전문가의 손길과 정성을 담아 인터넷 추모관에 간직해드립니다."
      />
      <meta property="og:url" content="https://www.borammemory.com/" />
      <meta property="og:image" content="https://www.borammemory.com/og-image.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="보람상조" />

      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </>
  );
};

export default MetaTags;
