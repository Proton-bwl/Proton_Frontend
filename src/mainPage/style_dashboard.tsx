import styled from '@emotion/styled';
import { STCOMBoxWrapper } from '../common/styles/commonStyleComs';
export const MainContainer = styled.div`
  width: 100vw;
  max-width: 120rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 9.5rem 6.4rem 0;

  transform-origin: top center;
  @media (max-width: 1600px) {
    transform: scale(0.9);
  }
  @media (max-width: 1300px) {
    transform: scale(0.8);
  }
`;

export const Announcement = {
  Container: styled(STCOMBoxWrapper)`
    position: relative;
    margin-top: 6.4rem;
    width: 100%;
    height: 21.8rem;
    padding: 4.5rem 3rem;
    border: 1px solid ${({ theme }) => theme.colors.white};
    overflow: hidden;
  `,
  Background: styled.img`
    width: 48rem;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
  `,
  Label: styled.div`
    width: fit-content;
    height: auto;
    padding: 0.9rem;
    border-radius: 93.75px;
    background-color: ${({ theme }) => theme.colors.qve_blue};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.caption};
    margin-bottom: 1.2rem;
  `,
  Text: styled.p`
    ${({ theme }) => theme.fonts.title_1};
  `,
};

export const Dashboard = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 4.7rem;
  `,
};
