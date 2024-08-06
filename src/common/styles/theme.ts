import { Theme } from '@emotion/react';

const colors = {
  testColor: '#ccc',
};

const FONT = (
  fontFamily: string,
  fontSize: number,
  fontStyle: string,
  fontWeight: number,
  lineHeight: string,
  letterSpacing: number
): string => `
  font-family:${fontFamily};
  font-size:${fontSize}rem;
  font-style:${fontStyle};
  font-weight:${fontWeight};
  line-height:${lineHeight};
  letter-spacing:${letterSpacing}rem;
`;

const fonts = {
  testTitle: FONT('Montserrat', 2, 'normal', 600, 'normal', 0.04),
};

export type ColorsTypes = typeof colors;
export type FontsTypes = typeof fonts;

export const theme: Theme = {
  colors,
  fonts,
};
