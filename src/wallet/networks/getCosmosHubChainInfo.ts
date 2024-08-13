export const getCosmosHubChainInfo = () => ({
  chainId: 'cosmoshub-4',
  chainName: 'Cosmos Hub',
  rpc: 'https://rpc.cosmos.network',
  rest: 'https://rest.cosmos.network',
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: 'cosmos',
    bech32PrefixAccPub: 'cosmos' + 'pub',
    bech32PrefixValAddr: 'cosmos' + 'valoper',
    bech32PrefixValPub: 'cosmos' + 'valoperpub',
    bech32PrefixConsAddr: 'cosmos' + 'valcons',
    bech32PrefixConsPub: 'cosmos' + 'valconspub',
  },
  currencies: [
    {
      coinDenom: 'ATOM',
      coinMinimalDenom: 'uatom',
      coinDecimals: 6,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'ATOM',
      coinMinimalDenom: 'uatom',
      coinDecimals: 6,
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.04,
      },
    },
  ],
  stakeCurrency: {
    coinDenom: 'ATOM',
    coinMinimalDenom: 'uatom',
    coinDecimals: 6,
  },
  features: [], // 기능 목록에서 제거
});
