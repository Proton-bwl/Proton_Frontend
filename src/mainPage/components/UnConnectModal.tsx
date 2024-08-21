import styled from '@emotion/styled';
import {
  STCOMBackground,
  STCOMBlueBtn,
} from '../../common/styles/commonStyleComs';
import { IcModalX, IcNotice } from '../assets/0_index';
import ConnectWallet from '../../wallet/ConnectWallet';
import { useRef } from 'react';
import useOutsideClick from '../../common/hooks/useOutsideClick';

const UnConnectModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideClick(wrapperRef, onClose);
  if (!isOpen) return;

  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? (
    <STCOMBackground>
      <StWrapper ref={wrapperRef}>
        <StTop>
          <p>Notice</p>
          <IcModalX onClick={onClose} style={{ cursor: 'pointer' }} />
        </StTop>
        <StMiddle>
          <span>Investing in the bot is only available on desktop.</span>
          <span>Please switch to a desktop to proceed.</span>
        </StMiddle>
        <StBottom>
          <StBlueBtn onClick={onClose}>Ok</StBlueBtn>
        </StBottom>
      </StWrapper>
    </STCOMBackground>
  ) : (
    <STCOMBackground>
      <StWrapper ref={wrapperRef}>
        <StTop>
          <p>Wallet unconnected</p>
          <IcModalX onClick={onClose} style={{ cursor: 'pointer' }} />
        </StTop>
        <StMiddle>
          <StIcNotice />
          <span>Wallet not connected.</span>
          <span>Please connect your wallet.</span>
        </StMiddle>
        <StBottom>
          <ConnectWallet />
        </StBottom>
      </StWrapper>
    </STCOMBackground>
  );
};

export default UnConnectModal;

const StWrapper = styled.div`
  width: 56rem;
  height: 25.2rem;
  border-radius: 16px;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.colors.invest_background};
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > * {
    width: 100%;
  }

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
    height: 20rem;
  }
`;

const StTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.fonts.body_2};
`;

const StIcNotice = styled(IcNotice)`
  margin-bottom: 0.4rem;
`;

const StMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.fonts.small_phrase};
`;

const StBottom = styled.div`
  display: flex;
  justify-content: center;
`;

const StBlueBtn = styled(STCOMBlueBtn)`
  padding: 1rem 2rem;
`;
