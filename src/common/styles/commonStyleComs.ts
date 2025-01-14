import styled from '@emotion/styled';
import { transformStyles } from './transformStyles';

export const STCOMBoxWrapper = styled.div`
  border-radius: 40px;
  border: 0.1rem solid #fff;
  background: linear-gradient(
    144deg,
    rgba(255, 255, 255, 0.1) -9.46%,
    rgba(255, 255, 255, 0.25) 115.25%
  );
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
`;

export const STCOMGlassWrapper = styled.div`
  border-radius: 40px;
  border: 0.1rem solid transparent;
  background-image: linear-gradient(
      144deg,
      rgba(0, 0, 0, 0.6) -9.46%,
      rgba(0, 0, 0, 0.5) 115.25%
    ),
    linear-gradient(
      330deg,
      rgba(255, 255, 255, 0.2) -9.46%,
      rgba(255, 255, 255, 0.8) 115.25%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

export const STCOMBlueBtn = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.qve_blue};
  border-radius: 100px;
  ${({ theme }) => theme.fonts.body_2_bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const STCOMGreyBtn = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: #545b67;
  border-radius: 100px;
  ${({ theme }) => theme.fonts.body_2_bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const STCOMBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  ${transformStyles}
`;

export const STCOMBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background-color: #545b67;
  opacity: 0.7;
`;
