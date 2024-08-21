import { css } from '@emotion/react';
import { theme } from './theme';

export const transformStyles = css`
  transform-origin: top center;

  @media (${theme.breakpoints.desktop}) {
    transform: scale(0.9);
  }

  @media (${theme.breakpoints.tablet}) {
    transform: scale(0.75);
  }

  @media (${theme.breakpoints.mobile}) {
    transform: scale(1);
  }
`;
