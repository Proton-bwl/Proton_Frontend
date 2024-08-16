import styled from '@emotion/styled';
import { STCOMGlassWrapper } from '../common/styles/commonStyleComs';
export const MainContainer = styled.div`
  width: 100vw;
  max-width: 120rem;
  min-width: 89.6rem;
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

export const PreTitle = styled.div`
  ${({ theme }) => theme.fonts.mont_18_medium};
  color: ${({ theme }) => theme.colors.sub_white};
`;
export const Title = styled.div`
  ${({ theme }) => theme.fonts.title_0};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  word-wrap: break-word;
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
    min-width: 76.9rem;
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
      ${({ theme }) => theme.fonts.body_1_1};
      color: ${({ theme }) => theme.colors.not_important};
    }
  `,
  TotalValue: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & > p:nth-of-type(1) {
      ${({ theme }) => theme.fonts.body_2m};
      color: ${({ theme }) => theme.colors.not_important};
    }
    & > p:nth-of-type(2) {
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
      & > * {
        cursor: pointer;
      }
    }

    & p {
      margin: 3.4rem 0 1.4rem;
      ${({ theme }) => theme.fonts.body_3m};
    }
  `,
  BackgroundImg1: styled.img`
    width: 40%;
    position: absolute;
    top: -2%;
    right: 20%;
    opacity: 0.4;
    transform: rotate(330deg);
  `,
  BackgroundImg2: styled.img`
    width: 100%;
    position: absolute;
    top: 0;
    right: -30%;
    z-index: -1;
  `,
};

export const Section2 = {
  Container: styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > p {
      ${({ theme }) => theme.fonts.mont_18_medium};
      color: ${({ theme }) => theme.colors.sub_white};
      margin-bottom: 1rem;
    }
  `,
  Contents: styled.div`
    width: 100%;
    margin: 6.4rem 0 12.8rem;
    display: flex;
    justify-content: center;
    gap: 3rem;

    @media (max-width: 1024px) {
      gap: 2.5rem;
    }
  `,
  AboutItem: styled.div`
    min-width: 28.2em;
    max-width: 38rem;
    width: 100%;
    height: 45.5rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
  `,
  IconContainer: styled.div`
    display: flex;
    gap: 0.4rem;
    align-items: center;
    margin-bottom: 3.8rem;
    & > span {
      ${({ theme }) => theme.fonts.body_1m};
    }
  `,
  AbouItemLayout: styled.div`
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
    ${({ theme }) => theme.fonts.body_1_1};
    word-wrap: break-word;
    color: ${({ theme }) => theme.colors.sub_white};
    height: 8.4rem;
  `,
};

export const Section3 = {
  Container: styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  InTro: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  sufTitle: styled.p`
    ${({ theme }) => theme.fonts.body_3};
    color: ${({ theme }) => theme.colors.not_important};
  `,
  BackgroundImg: styled.img`
    width: 160rem;
    position: absolute;
    top: 10rem;
    left: -150%;
    transform: rotate(260deg);
    z-index: -1;
  `,

  SubTitle: styled.p`
    ${({ theme }) => theme.fonts.body_3};
    color: ${({ theme }) => theme.colors.not_important};
  `,
};

export const Section4 = {
  Container: styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  ImgContainer: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    flex-wrap: wrap;
    margin: 6.4rem 0 14rem;
    @media (max-width: 1300px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr); // 2개의 열로 설정
    }
  `,
  ItemWrapper: styled(STCOMGlassWrapper)`
    width: 27rem;
    height: 27rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.3rem;
    ${({ theme }) => theme.fonts.body_2};

    & > img {
      width: 10rem;
      height: 10rem;
    }
  `,
};
