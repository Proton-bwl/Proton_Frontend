import styled from '@emotion/styled';
import { STCOMBoxWrapper } from '../common/styles/commonStyleComs';
export const MainContainer = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 6.4rem;
`;

export const Announcement = {
  Container: styled(STCOMBoxWrapper)`
    position: relative;
    margin-top: 6.4rem;
    width: 100%;
    height: 21.8rem;
    padding: 4.5rem 3rem;
  `,
  Background: styled.img`
    width: 48rem;
    position: absolute;
    right: 0;
    bottom: 0;
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
