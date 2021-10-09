import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
  display: flex;
  height: 1000px;
  width: 100%;
  background-image: radial-gradient(#ffb800, #ffcc47, #ffb800);
  z-index: 1;
`;

export const HeroBg = styled.img`
  width: 1657px;
  height: 2290px;
  overflow: hidden;
  position: absolute;
  left: -158px;
  top: -1062px;
  opacity: 0.05;
  z-index: 2;
`;

export const HeroLeft = styled.div`
  flex: 0.5;
  position: relative;
  z-index: 3;
`;

export const HeroLeftWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 150px;
`;

export const HeroTitle = styled(motion.h1)`
  font-size: 200px;
  font-family: "Poppins", sans-serif;
  margin-top: -50px;
  color: white;
`;

export const HeroDes = styled(motion.p)`
  font-size: 30px;
  opacity: 60%;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.7em;
  color: white;
`;

export const ColorPickerWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  margin-top: 150px;
  padding: 5px;
`;

export const ColorText = styled.p`
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  opacity: 70%;
`;

export const ButtonLeft = styled(Link)`
  width: 24.88px;
  height: 24.88px;
  margin-top: 3px;
  margin-left: 25px;
  background: #b2d306;
  border: none;
  border-radius: 47.5px;
`;

export const ButtonMiddle = styled(Link)`
  width: 24.88px;
  height: 24.88px;
  margin-top: 3px;
  margin-left: 15px;
  background: #ffb800;
  border: none;
  border-radius: 47.5px;
  box-shadow: 0 0 0 5px white;
`;

export const ButtonRight = styled(Link)`
  width: 24.88px;
  height: 24.88px;
  margin-top: 3px;
  margin-left: 15px;
  background: #c4c4c4;
  border: none;
  border-radius: 47.5px;
`;

export const HeroRight = styled.div`
  flex: 0.5;
  overflow: hidden;
  z-index: 3;
`;

export const Image = styled(motion.img)`
  width: 521px;
  height: 758px;
  margin-left: 150px;
  margin-top: 70px;
`;

export const Shadow = styled(motion.div)`
  width: 409px;
  height: 45px;
  margin-left: 230px;

  background: #000000;
  filter: blur(50px);
`;
