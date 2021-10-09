import React from 'react'
import {
  HeroContainer,
  HeroBg,
  HeroLeft,
  HeroLeftWrapper,
  HeroTitle,
  HeroDes,
  ColorPickerWrapper,
  ColorText,
  ButtonLeft,
  ButtonMiddle,
  ButtonRight,
  HeroRight,
  Image,
  Shadow,
} from "./Hero.style";
import img from "../../Images/orange_hedphone.svg";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroBg src={img} />

      <HeroLeft>
        <HeroLeftWrapper>
          <HeroTitle variants={leftVariants} initial="hidden" animate="visible">
            BEATS
          </HeroTitle>
          <HeroDes variants={leftVariants} initial="hidden" animate="visible">
            TRUE STERFO SOUND
          </HeroDes>
          <ColorPickerWrapper
            variants={rightVariants}
            initial="hidden"
            animate="visible"
          >
            <ColorText>Choose Colors:</ColorText>
            <ButtonLeft to="/" />
            <ButtonMiddle to="/OragePage" />
            <ButtonRight to="/GrayPage" />
          </ColorPickerWrapper>
        </HeroLeftWrapper>
      </HeroLeft>
      <HeroRight>
        <Image
          src={img}
          variants={upVariants}
          initial="hidden"
          animate="visible"
        />
        <Shadow
          src={img}
          variants={upVariants}
          initial="hidden"
          animate="visible"
        />
      </HeroRight>
    </HeroContainer>
  );
}

const rightVariants = {
  hidden: {
    opacity: 0,
    x: "500px",
  },
  visible: {
    opacity: 1,
    x: "0px",
    transition: {
      duration: 1,
    },
  },
};

const leftVariants = {
  hidden: {
    opacity: 0,
    x: "-500px",
  },
  visible: {
    opacity: 1,
    x: "0px",
    transition: {
      duration: 1,
    },
  },
};

const upVariants = {
  hidden: {
    opacity: 0,
    y: "500px",
  },
  visible: {
    opacity: 1,
    y: "0px",
    transition: {
      duration: 1,
    },
  },
};