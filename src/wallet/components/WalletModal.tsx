import {
  STCOMBackground,
  STCOMBoxWrapper,
} from '../../common/styles/commonStyleComs';
import styled from '@emotion/styled';
import { IcModalX } from '../../mainPage/assets/0_index';
import {
  IcDisConnect,
  IcDuplicate,
  WalletNeutronIcon,
} from '../assets/0_indes';
import { disconnectWallet } from '../utils/disconnectWallet';
import { useNavigate } from 'react-router-dom';
import { shortenWalletAddress } from '../../common/utils/shortenWalletAddress';
import { copyLink } from '../../common/utils/copyLink';
import CopyToast from '../../common/components/CopyToast';
import useToast from '../../common/hooks/useToast';

const WalletModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const navigate = useNavigate();
  const address = localStorage.getItem('NEUTRONADDRESS');
  const { toast, showToast } = useToast();
  if (!isOpen || !address) return;

  return (
    <STCOMBackground>
      <StWrapper>
        <StTop>
          <p>Account</p>
          <IcModalX onClick={onClose} style={{ cursor: 'pointer' }} />
        </StTop>
        <StWalletInfo>
          <StSpaceBetween>
            <StFlexC>
              <span>Connected with Keplr</span>
              <StAddress>
                <WalletNeutronIcon />
                <p>{shortenWalletAddress(address)}</p>
                <StCopyIcon>
                  <StIcDuplicate
                    onClick={() => {
                      copyLink(address);
                      showToast('copy address!');
                    }}
                  />
                  {toast && <CopyToast message={toast.message} />}
                </StCopyIcon>
              </StAddress>
            </StFlexC>

            <StDisconnectBtn
              onClick={async () => {
                await disconnectWallet();
                onClose();
                navigate('/');
              }}
            >
              Disconnect
              <IcDisConnect />
            </StDisconnectBtn>
          </StSpaceBetween>
        </StWalletInfo>
      </StWrapper>
    </STCOMBackground>
  );
};

export default WalletModal;

const StWrapper = styled.div`
  width: 56rem;
  height: 25.2rem;
  border-radius: 16px;
  padding: 2.4rem;
  gap: 1.4rem;
  background-color: ${({ theme }) => theme.colors.invest_background};
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > * {
    width: 100%;
  }
`;

const StTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.fonts.body_2};
`;

const StWalletInfo = styled(STCOMBoxWrapper)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 16px;
  justify-content: center;
  ${({ theme }) => theme.fonts.body_3};
  padding: 4.7rem 3rem;
`;

const StDisconnectBtn = styled.button`
  width: 17.3rem;
  height: 4.6rem;
  border-radius: 20px;
  background-color: #3f3f46;
  ${({ theme }) => theme.fonts.body_2m};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

const StSpaceBetween = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StFlexC = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StAddress = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StIcDuplicate = styled(IcDuplicate)`
  cursor: pointer;
`;

const StCopyIcon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
