import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { theme } from './theme';

const globalStyles = css`
  ${emotionReset}

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  #root {
    height: 100vh;
  }

  @media (${theme.breakpoints.mobile}) {
    body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }

    #root {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 100vw;
      min-width: 375px;
      height: 100%;
      max-width: 768px;
      overflow: hidden;
    }
  }

  body {
    width: 100vw;
    color: #fff;
    background-color: ${theme.colors.qve_background};
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;

export default globalStyles;
