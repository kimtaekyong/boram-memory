"use client";

import { ReactNode, FC } from "react";
import styled from "styled-components";

const Maincontainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  height: calc(100vh - 80px);
`;

interface Main {
  children: ReactNode;
}

const Main: FC<Main> = ({ children }) => {
  return <Maincontainer>{children}</Maincontainer>;
};

export default Main;
