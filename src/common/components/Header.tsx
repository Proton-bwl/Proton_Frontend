import styled from '@emotion/styled';
import { QveLogo } from '../assets/0_index';
import ConnectWallet from './ConnectWallet';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <StContainer>
      <StWrapper>
        <StQveLogo />
        <StNav>
          <StNavItem onClick={() => navigate('/')}>About</StNavItem>
          <StNavItem onClick={() => navigate('/')}>Features</StNavItem>
          <StNavItem onClick={() => navigate('/')}>Process</StNavItem>
          <StNavItem onClick={() => navigate('/')}>Docs</StNavItem>
          <ConnectWallet />
        </StNav>
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
  background-color: ${({ theme }) => theme.colors.qve_background};
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
