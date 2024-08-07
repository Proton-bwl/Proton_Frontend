import {
  IcFooterGithub,
  IcFooterMedium,
  IcFooterTelegram,
  IcFooterTwitter,
} from '../assets/0_index';
import styled from '@emotion/styled';

const Footer = () => {
  return (
    <StFooter.Container>
      <StFooter.BlockWave>
        <p>
          <StFooter.Bold>Blockwave Labs</StFooter.Bold>
          <span> | contact@blockwavelabs.io</span>
        </p>
        <p>Blockwave Labs Inc. All rights reserved</p>
      </StFooter.BlockWave>
      <StFooter.ConnectIcon>
        <IcFooterTwitter />
        <IcFooterTelegram />
        <IcFooterMedium />
        <IcFooterGithub />
      </StFooter.ConnectIcon>
    </StFooter.Container>
  );
};

export default Footer;

const StFooter = {
  Container: styled.footer`
    position: relative;
    width: 100%;
    padding: 6.4rem 0;
    margin-top: 13.6rem;
    display: flex;
    justify-content: space-between;
    bottom: 0;
  `,
  BlockWave: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.8rem;
    color: ${({ theme }) => theme.colors.label};

    & p {
      ${({ theme }) => theme.fonts.body};
    }
  `,
  Bold: styled.span`
    font-weight: 700;
  `,
  ConnectIcon: styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
  `,
};
