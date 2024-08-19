import {
  IcFooterGithub,
  IcFooterMedium,
  IcFooterTelegram,
  IcFooterTwitter,
} from '../assets/0_index';
import styled from '@emotion/styled';
import { LINKS } from '../constants/LINKS';

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
        <a href={LINKS.twitter} target='_blank'>
          <IcFooterTwitter />
        </a>
        <a href={LINKS.telegrem} target='_blank'>
          <IcFooterTelegram />
        </a>
        <a href={LINKS.medium} target='_blank'>
          <IcFooterMedium />
        </a>
        <a href={LINKS.github} target='_blank'>
          <IcFooterGithub />
        </a>
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

    & > * {
      cursor: pointer;
    }
  `,
};
