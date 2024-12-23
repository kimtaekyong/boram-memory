// src/styles/GlobalStyles.tsx
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard/Pretendard-Light.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard/Pretendard-Regular.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard/PretendardBold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    src: url('/fonts/SpoqaHanSans/SpoqaHanSansNeo-light.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    src: url('/fonts/SpoqaHanSans/SpoqaHanSansNeo-Regular.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    src: url('/fonts/SpoqaHanSans/SpoqaHanSansNeo-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'GowunBatang-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunBatang-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  body {
    font-family: "Spoqa Han Sans Neo","Pretendard", "GowunBatang-Regular";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
`;

export default GlobalStyles;
