import { keyframes } from '@emotion/react';

export const slideUp = keyframes`
  from {
    transform: translateY(100%); /* Start below the element */
    opacity: 0;
  }
  to {
    transform: translateY(0); /* End at the normal position */
    opacity: 1;
  }
`;
