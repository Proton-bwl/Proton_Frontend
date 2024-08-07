import styled from '@emotion/styled';
export const Container = styled.div``;

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
    width: 120rem;
    margin: 0 0.8rem;
    margin-top: 24rem;
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
