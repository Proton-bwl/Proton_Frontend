import { css } from '@emotion/react';
import { theme } from './theme';

export const transformStyles = css`
  transform-origin: top center;

  @media (max-width: ${theme.breakpoints.desktop}) {
    transform: scale(0.9);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    transform: scale(0.8);
  }
`;
