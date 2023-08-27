"use client";
import React from "react";
import styled from "styled-components";

const MainWrapperStyled = styled.main`
  width: 100%;
  max-width: 800px;
  padding: 16px 24px;
  margin: 0px auto;
  border: 1px solid hsl(0deg 0% 50% / 0.3);
  border-radius: 2px;
  background: white;
`;

function MainWrapper({ children }) {
  return <MainWrapperStyled>{children}</MainWrapperStyled>;
}

export default MainWrapper;
