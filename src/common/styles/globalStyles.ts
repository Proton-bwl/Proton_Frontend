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

  body {
    color: #fff;
    background-color: ${theme.colors.qve_background};
  }

  button {
    border: none;
  }
`;

export default globalStyles;
