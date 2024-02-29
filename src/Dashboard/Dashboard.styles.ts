// Dashboard.styles.ts
import styled, { keyframes } from 'styled-components';
import formula1Image from '../assets/images/banner.jpeg';
import { theme, palette } from '../UI/core';

const bannerImage = `url(${formula1Image})`;

// Typing animation keyframes
const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vh;
  background: ${bannerImage} center/cover;
`;

export const CenteredContent = styled.div`
  text-align: start;
  margin-left: 5rem;
`;


export const Banner = styled.div`
  display: flex;
  width: 100%;
  padding: ${theme.space};
  background: ${bannerImage} center/cover;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
  color: ${palette.white};
  text-align: center;
  height: 100%;
  margin-bottom: 10px;
`;

export const TitleWrapper = styled.section`
  display: flex;
  width: 100%;
  padding: ${theme.space};
  background-color: ${palette.primary};
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
`;

export const TitleText = styled.h1`
  font-size: ${theme.fontSize.xxl};
  color: ${palette.white};
  font-family: Roboto;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  animation: ${typingAnimation} 4s steps(20) 1s forwards; /* Adjust timing as needed */
`;

export const SubTitleText = styled.span`
  font-size: ${theme.fontSize.default};
  color: ${palette.white};
  font-family: Roboto;
  opacity: 0;
  animation: ${fadeInAnimation} 2s ease-in-out 5s forwards; /* Adjust timing as needed */
`;

export const StateContainer = styled.section`
  display: flex;
  flex-grow: 1; /* Allow it to grow and fill the remaining space */
  align-items: center;
  justify-content: center;
`;

export const StateText = styled.span`
  font-size: ${theme.fontSize.lg};
  font-family: Roboto;
  text-align: center; /* Align the text in the center */
`;
export const HomeButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: ${theme.fontSize.default};
  background-color: transparent;
  color: ${palette.white};
  cursor: pointer;
  border: 1px solid white;
  border-radius: 5px;
  transition: background-color 0.3s ease;
font-family:  Nasalization, sans-serif;
  &:hover {
    background-color: ${palette.secondary};
    color: ${palette.black};
  }
`;