// import nuetron_chainInfo from './network_info';

const ConnectWallet = () => {
  const connectKeplr = async () => {
    if (!window.keplr) {
      alert('Please install Keplr extension');
      window.open('https://www.keplr.app/get');
      return;
    }
    try {
      // 네트워크 체인 ID
      const chainId = 'neutron-1'; // 예: Cosmos Hub의 체인 ID

      // Keplr 지갑을 사용하여 체인 활성화
      await window.keplr.enable(chainId);

      // Keplr 지갑에서 오프라인 서명자 가져오기
      const offlineSigner = window.keplr.getOfflineSigner(chainId);

      // 계정 정보 가져오기
      const accounts = await offlineSigner.getAccounts();
      console.log(accounts);

      alert(`Wallet connected: ${accounts[0].address}`);
    } catch (error) {
      console.error(error);
      alert('Failed to connect to Keplr wallet');
    }
  };

  return <button onClick={connectKeplr}>ConnectWallet</button>;
};

export default ConnectWallet;
