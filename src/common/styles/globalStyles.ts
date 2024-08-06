import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

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
`;

export default globalStyles;
