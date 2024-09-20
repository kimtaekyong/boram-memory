"use client";

import LoginForm from "@/components/forms/LoginForm";
import React from "react";
import { styled } from "styled-components";

const Login = () => {
  const PageContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;
  `;
  return (
    <>
      <PageContainer>
        <LoginForm />
      </PageContainer>
    </>
  );
};

export default Login;
