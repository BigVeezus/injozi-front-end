// Button.styles.ts
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { ButtonProps } from './Button.types';
import { palette, theme as UITheme } from '../core';

export const ButtonStyled = styled.button<ButtonProps>(({ theme, ml, mt, mr, mb, isFluid }) => {
  const whiteThemeStyle = css`
    color: rgba(255, 0, 0, 0.1);
    border: 1px solid ${palette.primary};
  `;

  const themeStyle = css`
    background-color: rgba(255, 0, 0, 0.1);
    ${palette[theme] === palette.white && whiteThemeStyle}
  `;

  const marginLeftStyle = css`
    margin-left: ${ml}px;
  `;

  const marginTopStyle = css`
    margin-top: ${mt}px;
  `;

  const marginRightStyle = css`
    margin-right: ${mr}px;
  `;

  const marginBottomStyle = css`
    margin-bottom: ${mb}px;
  `;

  const fluidStyle = css`
    width: 100%;
  `;

  return css`
    height: 40px; /* Increased height for better visibility */
    font-size: ${UITheme.fontSize.default};
    font-family: Nasalization, sans-serif;
    border-radius: ${UITheme.borderRadius};
    box-sizing: border-box;
    border: 0;
    padding: 0 ${UITheme.space};
    outline: none;
    color: ${palette.orange};
    font-weight: 700;
    letter-spacing: 0.5px;
    transition: background-color 0.3s ease;

    &:hover {
      cursor: pointer;
 
    }

    &:focus {
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5); /* Added focus outline */
    }

    &:disabled {
      background-color: ${rgba(palette[theme], 0.9)};
      cursor: not-allowed;
    }

    ${theme && themeStyle}
    ${ml && marginLeftStyle}
    ${mt && marginTopStyle}
    ${mr && marginRightStyle}
    ${mb && marginBottomStyle}
    ${isFluid && fluidStyle}
  `;
});
