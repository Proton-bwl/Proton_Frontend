import styled from '@emotion/styled';
import { QveLogo } from '../assets/0_index';
import { useLocation, useNavigate } from 'react-router-dom';
import TradeNowBtn from '../../onboarding/Components/TradeNowBtn';
import ConnectWallet from '../../wallet/ConnectWallet';

interface HeaderProps {
  openWalletModal?: () => void;
  scrollToSection?: (ref: React.RefObject<HTMLDivElement>) => void;
  section2Ref?: React.RefObject<HTMLDivElement>;
  section3Ref?: React.RefObject<HTMLDivElement>;
  section4Ref?: React.RefObject<HTMLDivElement>;
}

const Header = ({
  openWalletModal,
  scrollToSection,
  section2Ref,
  section3Ref,
  section4Ref,
}: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <StContainer>
      <StWrapper>
        <StQveLogo onClick={() => navigate('/')} />
        {location.pathname === '/onboarding' ? (
          <StNav>
            <StNavItem
              onClick={() =>
                scrollToSection && section2Ref && scrollToSection(section2Ref)
              }
            >
              About
            </StNavItem>
            <StNavItem
              onClick={() =>
                scrollToSection && section3Ref && scrollToSection(section3Ref)
              }
            >
              Features
            </StNavItem>
            <StNavItem
              onClick={() =>
                scrollToSection && section4Ref && scrollToSection(section4Ref)
              }
            >
              Process
            </StNavItem>
            <StNavItem
              onClick={() =>
                window.open('https://blockwavelabs-1.gitbook.io/qve')
              }
            >
              Docs
            </StNavItem>
            <TradeNowBtn />
          </StNav>
        ) : (
          <ConnectWallet openWalletModal={openWalletModal} />
        )}
      </StWrapper>
    </StContainer>
  );
};

export default Header;

const StContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: ${({ theme }) => theme.colors.qve_background}; */
  background: linear-gradient(
    to bottom,
    rgba(1, 3, 5, 1) 80%,
    rgba(1, 3, 5, 0) 100%
  );
  z-index: 1;
`;

const StWrapper = styled.div`
  height: 4.6rem;
  width: 100%;
  max-width: 120rem;
  margin: 3.2rem 0rem 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  transform-origin: top center;
  @media (max-width: 1600px) {
    transform: scale(0.9);
  }

  @media (max-width: 1300px) {
    transform: scale(0.8);
  }
`;

const StQveLogo = styled(QveLogo)`
  width: 8.7rem;
`;

const StNav = styled.nav`
  display: flex;
  gap: 3.5rem;
`;

const StNavItem = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_2m};

  &:hover {
    color: #4a3ee9;
  }
`;
