import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { ToastContainerProps } from '../types/toastTypes';

const CopyToast = ({ message }: ToastContainerProps) => {
  if (!message) return null;

  return <StToastContainer>{message}</StToastContainer>;
};

export default CopyToast;

const slideInDown = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StToastContainer = styled.div`
  position: absolute;
  width: fit-content;
  bottom: 3rem;
  z-index: 1000;
  display: flex;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.not_important};

  animation: ${slideInDown} 1s ease-out;
`;
