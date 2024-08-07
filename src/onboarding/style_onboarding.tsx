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

export const Section1 = {
  Container: styled.section`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  ContentLayout: styled.div`
    min-width: 102.8rem;
    width: 100%;
    max-width: 132.8rem;
    margin: 24rem 0.8rem 0;
    display: flex;
    flex-direction: column;
    gap: 5.4rem;
  `,
  QVEIntroduce: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    & > h1 {
      ${({ theme }) => theme.fonts.body_0};
      color: ${({ theme }) => theme.colors.white};
    }

    & > p {
      max-width: 51.5rem;
      word-wrap: break-word;
      ${({ theme }) => theme.fonts.body_1};
      color: ${({ theme }) => theme.colors.not_important};
    }
  `,
  TotalValue: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & > p:nth-child(1) {
      ${({ theme }) => theme.fonts.body_2m};
      color: ${({ theme }) => theme.colors.not_important};
    }
    & > p:nth-child(2) {
      ${({ theme }) => theme.fonts.title_TVL};
      color: ${({ theme }) => theme.colors.white};
    }
  `,
  Bottom: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15rem 0;

    & nav {
      display: flex;
      gap: 1rem;
    }

    & p {
      margin: 3.4rem 0 1.4rem;
      ${({ theme }) => theme.fonts.caption};
    }
  `,
  BackgroundImg1: styled.img`
    width: 30%;
    position: absolute;
    top: -3rem;
    right: 30%;
    opacity: 0.4;
    transform: rotate(330deg);
  `,
  BackgroundImg2: styled.img`
    width: 60%;
    position: absolute;
    top: 0;
    right: 0;
  `,
};

export const Section2 = {
  Container: styled.section`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > p {
      ${({ theme }) => theme.fonts.body_2m};
      color: ${({ theme }) => theme.colors.sub_white};
      margin-bottom: 1rem;
    }
  `,
  Title: styled.div`
    ${({ theme }) => theme.fonts.title_0};
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    word-wrap: break-word;
  `,
  Contents: styled.div`
    margin: 6.4rem 0 12.8rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
  `,
  AboutItem: styled(STCOMBoxWrapper)`
    min-width: 28.2em;
    max-width: 38rem;
    width: 100%;
    height: 45.5rem;
    padding: 3rem;
    & > div {
      display: flex;
      gap: 0.4rem;
      align-items: center;
      margin-bottom: 3.8rem;

      & > span {
        ${({ theme }) => theme.fonts.body_1m};
      }
    }
  `,
  AbouItemLayout: styled.p`
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  ItemTitle: styled.p`
    ${({ theme }) => theme.fonts.title_2am};
    word-wrap: break-word;
  `,
  Explain: styled.p`
    ${({ theme }) => theme.fonts.body_1};
    word-wrap: break-word;
  `,
};
