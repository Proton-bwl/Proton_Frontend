import styled from '@emotion/styled';
import { QveLogo } from '../assets/0_index';
import { useLocation, useNavigate } from 'react-router-dom';
import TradeNowBtn from '../../onboarding/Components/TradeNowBtn';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <StContainer>
      <StWrapper>
        <StQveLogo />
        {location.pathname === '/dashboard' ? (
          <></>
        ) : (
          <StNav>
            <StNavItem onClick={() => navigate('/')}>About</StNavItem>
            <StNavItem onClick={() => navigate('/')}>Features</StNavItem>
            <StNavItem onClick={() => navigate('/')}>Process</StNavItem>
            <StNavItem
              onClick={() =>
                window.open('https://blockwavelabs-1.gitbook.io/qve')
              }
            >
              Docs
            </StNavItem>
            <TradeNowBtn />
          </StNav>
        )}
      </StWrapper>
    </StContainer>
  );
};

export default Header;

const StContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: ${({ theme }) => theme.colors.qve_background}; */
  background: linear-gradient(
    to bottom,
    rgba(1, 3, 5, 1) 70%,
    rgba(1, 3, 5, 0) 100%
  );
  z-index: 1;
`;

const StWrapper = styled.div`
  height: 4.6rem;
  width: 120rem;
  margin: 3.2rem 0.8rem 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;
