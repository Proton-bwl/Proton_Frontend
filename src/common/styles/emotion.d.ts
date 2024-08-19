import '@emotion/react';
import { BreakPointsTypes, ColorsTypes, FontsTypes } from './theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorsTypes;
    fonts: FontsTypes;
    breakpoints: BreakPointsTypes;
  }
}
