import { WalletConnectOptions } from '@cosmos-kit/walletconnect';
import { SignClientTypes } from '@walletconnect/types';

export const walletconnectOptions: WalletConnectOptions = {
  signClient: {
    projectId: 'QVE', // Replace with your WalletConnect project ID
    relayUrl: 'wss://relay.walletconnect.org',
    metadata: {
      name: 'My App',
      description: 'My App description',
      url: 'https://myapp.com',
      icons: ['https://myapp.com/icon.png'],
    },
  },
};
