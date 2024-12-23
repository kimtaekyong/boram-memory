"use client";

import SwiperUser from "@/components/common/SwiperUser";
import styled from "styled-components";
import React from "react";
import SearchBar from "@/components/common/SearchBar";
import MemberList from "@/components/common/MemberList";

const logoutMain = () => {
  const PageContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 0 120px 0;
    .Advertising {
      text-align: center;
      padding: 60px 0;
      .AdContaxt {
        color: #3c3c3c;
        margin-bottom: 42px;
        h2 {
          font-size: 28px;
          font-weight: 700;
          line-height: 1.55;
          letter-spacing: -1.25px;
        }
        p {
          font-size: 16px;
          font-weight: 500;
          letter-spacing: -1px;
        }
      }
      ul {
        display: flex;
        column-gap: 20px;
        li {
          width: calc(100% / 2);
          width: 100%;
          padding: 32px 64px;
          border-radius: 4px;
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #fff;
          box-shadow: 0px 4px 14px rgba(40, 60, 80, 0.25);
          background: linear-gradient(
            90deg,
            rgba(40, 60, 80, 0.8) 6.825520833333334%,
            rgba(40, 60, 80, 1) 100.67968749999999%
          );
          p {
            font-size: 16px;
            font-weight: 500;
            line-height: 1.65;
          }
          span {
            font-size: 18px;
            font-weight: 700;
          }
          button {
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #283c50;
            border-radius: 50%;
          }
        }
      }
    }
  `;
  return (
    <>
      <SwiperUser />
      <SearchBar />
      <PageContainer>
        <div className="Advertising">
          <div className="AdContaxt">
            <h2>쉽고 빠른 맞춤형 상담</h2>
            <p>상품 가입 전 필요한 모든 정보를 빠르고 간단하게 확인해보세요.</p>
          </div>
          <ul>
            <li style={{ background: "#fff", color: "#283c50", boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.05)" }}>
              <div>
                <p>지금 상담을 요청하시고 편안한 마음으로 준비하세요.</p>
                <span>온라인 상담신청</span>
              </div>
              <button
                onClick={() => window.open("https://www.boram.com/Cs/OnlineConsultation", "_blank")}
                className="text-Textcolor"
              >
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_89_456)">
                    <path
                      d="M1.6001 9.29999V7.69999H11.2001L8.0001 4.49999L8.8001 2.89999L14.4001 8.49999L8.8001 14.1L8.0001 12.5L11.2001 9.29999H1.6001Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_89_456">
                      <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </li>
            <li>
              <div>
                <p>사랑하는 이들과의 마지막 순간을 더 아름답게.</p>
                <span>장례상품 가입</span>
              </div>
              <button
                onClick={() => window.open("https://www.boram.com/Funeral/Catalog", "_blank")}
                style={{ background: "#fff" }}
              >
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_89_456)">
                    <path
                      d="M1.6001 9.29999V7.69999H11.2001L8.0001 4.49999L8.8001 2.89999L14.4001 8.49999L8.8001 14.1L8.0001 12.5L11.2001 9.29999H1.6001Z"
                      fill="#283c50"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_89_456">
                      <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <MemberList />
      </PageContainer>
    </>
  );
};

export default logoutMain;
