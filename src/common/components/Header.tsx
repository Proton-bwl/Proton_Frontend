import styled from '@emotion/styled';
import { IcMenu, ProtonLogo } from '../assets/0_index';
import { useLocation, useNavigate } from 'react-router-dom';
import TradeNowBtn from '../../onboarding/Components/TradeNowBtn';
import ConnectWallet from '../../wallet/ConnectWallet';
import { transformStyles } from '../styles/transformStyles';
import useMobile from '../hooks/useMobile';
import MobileSideNav from './MobileSideNav';
import { useState } from 'react';

interface HeaderProps {
  pathname?: string;
  openWalletModal?: () => void;
  scrollToSection?: (ref: React.RefObject<HTMLDivElement>) => void;
  section2Ref?: React.RefObject<HTMLDivElement>;
  section3Ref?: React.RefObject<HTMLDivElement>;
  section4Ref?: React.RefObject<HTMLDivElement>;
  onClose?: () => void;
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
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <StContainer>
      <StWrapper>
        <StProtonLogo
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        />
        {isMobile ? (
          <>
            <IcMenu onClick={() => setIsMenuOpen(true)} />
            {isMenuOpen && (
              <MobileSideNav
                isOpen={isMenuOpen}
                onClose={() => {
                  setIsMenuOpen(false);
                }}
              >
                <HeaderNav
                  pathname={location.pathname}
                  scrollToSection={scrollToSection}
                  section2Ref={section2Ref}
                  section3Ref={section3Ref}
                  section4Ref={section4Ref}
                  onClose={() => setIsMenuOpen(false)}
                />
              </MobileSideNav>
            )}
          </>
        ) : location.pathname === '/onboarding' ? (
          <HeaderNav
            pathname={location.pathname}
            scrollToSection={scrollToSection}
            section2Ref={section2Ref}
            section3Ref={section3Ref}
            section4Ref={section4Ref}
          />
        ) : (
          <ConnectWallet openWalletModal={openWalletModal} />
        )}
      </StWrapper>
    </StContainer>
  );
};

const HeaderNav = ({
  pathname,
  scrollToSection,
  section2Ref,
  section3Ref,
  section4Ref,
  onClose,
}: HeaderProps) => {
  return (
    <StNav>
      <StNavItem
        onClick={() => {
          onClose && onClose();
          scrollToSection && section2Ref && scrollToSection(section2Ref);
        }}
      >
        About
      </StNavItem>
      <StNavItem
        onClick={() => {
          onClose && onClose();
          scrollToSection && section3Ref && scrollToSection(section3Ref);
        }}
      >
        Features
      </StNavItem>
      <StNavItem
        onClick={() => {
          onClose && onClose();
          scrollToSection && section4Ref && scrollToSection(section4Ref);
        }}
      >
        Process
      </StNavItem>
      <StNavItem
        onClick={() => window.open('https://blockwavelabs-1.gitbook.io/qve')}
      >
        Docs
      </StNavItem>
      {pathname === '/onboarding' ? <TradeNowBtn /> : <ConnectWallet />}
    </StNav>
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
  background: linear-gradient(
    to bottom,
    rgba(1, 3, 5, 1) 80%,
    rgba(1, 3, 5, 0) 100%
  );
  z-index: 1;
  padding: 0;
  margin: 0;
`;

const StWrapper = styled.div`
  position: relative;
  height: 4.6rem;
  width: 100%;
  max-width: 120rem;
  margin: 3.2rem 0rem 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${transformStyles}

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    margin: 2.5rem 2rem;
  }
`;

const StProtonLogo = styled(ProtonLogo)`
  width: 15.9rem;

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    width: 14.4rem;
  }
`;

const StNav = styled.nav`
  display: flex;
  gap: 3.5rem;

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    align-items: start;
    margin-top: 6rem;
  }
`;

const StNavItem = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_2m};

  &:hover {
    color: #4a3ee9;
  }
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    &:nth-of-type(4) {
      margin-bottom: 6.4rem;
    }
  }
`;
