import React from "react";
import {
  TopbarContainer,
  TopbarWrapper,
  TopbarLogo,
  TopbarLeft,
  TopbarRight,
  TextWrapper,
  TopbarText,
} from "./Topbar.style";

export default function Topbar() {
  return (
    <TopbarContainer>
      <TopbarWrapper>
        <TopbarLeft>
          <TopbarLogo>PHILIPS</TopbarLogo>
        </TopbarLeft>
        <TopbarRight>
          <TextWrapper>
            <TopbarText>Home</TopbarText>
            <TopbarText>Portfolio</TopbarText>
            <TopbarText>About</TopbarText>
            <TopbarText>Contact Us</TopbarText>
          </TextWrapper>
        </TopbarRight>
      </TopbarWrapper>
    </TopbarContainer>
  );
}
