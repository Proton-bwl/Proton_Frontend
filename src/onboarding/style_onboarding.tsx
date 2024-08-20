import styled from '@emotion/styled';
import { STCOMGlassWrapper } from '../common/styles/commonStyleComs';
import { transformStyles } from '../common/styles/transformStyles';
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

  ${transformStyles}

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 375px;
    max-width: 430px;
    padding: 6.4rem 2.4rem 0;
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
    margin: 24rem 0.8rem 7.8rem;
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
    margin: 7.2rem 0;

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
    width: 127rem;
    position: absolute;
    top: -10rem;
    right: -50rem;
    z-index: -1;

    @media (${({ theme }) => theme.breakpoints.mobile}) {
      width: 100rem;
      top: 0;
      left: -33rem;
      opacity: 0.8;
    }
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

    @media (${({ theme }) => theme.breakpoints.tablet}) {
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
    width: 127rem;
    position: absolute;
    top: -30rem;
    left: -110%;
    transform: rotate(15deg);
    z-index: -1;
  `,
  BackgroundImg2: styled.img`
    width: 57rem;
    position: absolute;
    bottom: -30rem;
    right: -41rem;
    transform: rotate(11deg);
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
    margin: 6.4rem 0 14rem;
    @media (${({ theme }) => theme.breakpoints.tablet}) {
      flex-wrap: wrap;
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

export const Mobile = {
  ContentLayout: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    & > h1 {
      width: 34rem;
      text-align: center;
      word-wrap: break-word;
      ${({ theme }) => theme.fonts.title_TVL};
    }
    & > p {
      width: 38.2rem;
      text-align: center;
      ${({ theme }) => theme.fonts.body_3};
      color: ${({ theme }) => theme.colors.not_important};
      margin-top: 1rem;
    }
  `,
  GlassWrapper: styled.div`
    background-image: linear-gradient(
        144deg,
        rgba(255, 255, 255, 0.1) -9.46%,
        rgba(255, 255, 255, 0.25) 115.25%
      ),
      linear-gradient(
        300deg,
        rgba(255, 255, 255, 0.01) -9.46%,
        rgba(255, 255, 255, 0.01) 115.25%
      );
    border: 0.1rem solid transparent;
    background-origin: border-box;
    backdrop-filter: blur(10px);
    background-clip: content-box, border-box;
    border-radius: 20px;
    width: 100%;
    color: ${({ theme }) => theme.colors.sub_white};
    margin-top: 5.1rem;
    margin-bottom: 2.4rem;
    z-index: 1;
  `,
  ValueContainer: styled.div`
    position: relative;
    width: 100%;
    height: 12rem;
    padding: 2.5rem;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    gap: 1.5rem;
  `,
  ValueLabel: styled.p`
    ${({ theme }) => theme.fonts.body_2m};
  `,
  Value: styled.p`
    ${({ theme }) => theme.fonts.title_2a};
    color: white;
  `,
};
