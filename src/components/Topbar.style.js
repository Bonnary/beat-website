import styled from "styled-components";

export const TopbarContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: transparent;
  position: fixed;
  top: 0;
  z-index: 5;
`;

export const TopbarWrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopbarLogo = styled.h1`
  font-size: 32px;
  margin-right: 40px;
  margin-left: 212px;
  font-family: "Poppins", sans-serif;
  color: white;
`;

export const TopbarLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const TopbarRight = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const TextWrapper = styled.div`
  border: 2px dashed #000000;
  filter: drop-shadow(0px 1px 22px rgba(0, 0, 0, 0.1));
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 80px;
  padding-left: 80px;
`;

export const TopbarText = styled.h2`
  font-size: 18px;
  display: flex;

  font-family: "Poppins", sans-serif;
  cursor: pointer;
  color: white;
  padding: 15px;

  &:hover {
    color: black;
  }
`;