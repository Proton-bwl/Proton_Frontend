import { useChain } from '@cosmos-kit/react';
import {
  Box,
  Button,
  ThemeProvider,
  useColorModeValue,
  useTheme,
} from '@interchain-ui/react';

const Test = () => {
  const { connect, status } = useChain('neutron');

  const handleClick = async () => {
    await connect();
  };

  return (
    <div>
      <button onClick={handleClick}>
        wallet connect
        {status === 'connected' ? 'Connected' : 'Connect Wallet'}
      </button>
      {status === 'connected' && account && (
        <p>Connected as: {account.address}</p>
      )}
    </div>
  );
};

export default Test;
