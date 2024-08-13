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
