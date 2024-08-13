// import nuetron_chainInfo from './network_info';

import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { IcQveIcon, IcWallet } from './assets/0_indes';
import { useNavigate } from 'react-router-dom';

const ConnectWallet = ({
  openWalletModal,
}: {
  openWalletModal?: () => void;
}) => {
  const navigate = useNavigate();
  const [address, setAddress] = useState(
    localStorage.getItem('NEUTRONADDRESS')
  );

  useEffect(() => {
    setAddress(localStorage.getItem('NEUTRONADDRESS'));
  }, []);
  const connectKeplr = async () => {
    if (!window.keplr) {
      // alert('Please install Keplr extension');
      window.open('https://www.keplr.app/chains/neutron');
      return;
    }
    try {
      // 네트워크 체인 ID
      const chainId = 'neutron-1'; // 예: Cosmos Hub의 체인 ID

      // Keplr 지갑에서 오프라인 서명자 가져오기
      const offlineSigner = window.keplr.getOfflineSigner(chainId);

      // 계정 정보 가져오기
      const accounts = await offlineSigner.getAccounts();
      const userAddress = accounts[0].address;
      if (userAddress !== address) {
        localStorage.setItem('NEUTRONADDRESS', userAddress);
        setAddress(userAddress);
        navigate('/tradeBots');
      } else {
        openWalletModal && openWalletModal();
      }
    } catch (error) {
      console.error(error);
      alert('Failed to connect to Keplr wallet');
    }
  };

  return (
    <StWalletBtn onClick={connectKeplr}>
      {address ? (
        <StIcon>
          <StI>
            <IcQveIcon />
          </StI>
          <span>{address}</span>
        </StIcon>
      ) : (
        <>
          <span>Connect Wallet</span>
          <IcWallet />
        </>
      )}
    </StWalletBtn>
  );
};

export default ConnectWallet;

const StWalletBtn = styled.button`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  background: linear-gradient(125deg, #2f44b0ab 1%, #581a38e4 99%);
  /* min-width: 16.7rem; */
  width: fit-content;
  height: 4.6rem;
  border-radius: 20px;
  padding: 1rem;
  & span {
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.body_2m};
    overflow: hidden;
    /* padding-left: 3.2rem; */
  }

  &:hover {
    background: linear-gradient(125deg, #581a38e4 1%, #2f44b0ab 99%);
  }
`;

const StIcon = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  gap: 0.5rem;
  align-items: center;

  & > span {
    width: 14.7rem;
    text-overflow: ellipsis;
    padding-left: 3.5rem;
  }
`;

const StI = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;
