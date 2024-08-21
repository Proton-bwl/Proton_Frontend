import { Coin, OfflineDirectSigner } from '@cosmjs/proto-signing';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { GasPrice } from '@cosmjs/stargate';
import { OfflineAminoSigner } from '@keplr-wallet/types';

const rpcEndpoint = 'https://neutron-rpc.publicnode.com/';
const address = localStorage.getItem('NEUTRONADDRESS');
const chain_id = 'neutron-1';
const decimalPlaces = 6;

const formatAmount = (amount: number, decimalPlaces: number): number => {
  const multiplier = Math.pow(10, decimalPlaces);
  const integerAmount = (amount * multiplier).toFixed(0); // No need to use parseFloat
  return Number(integerAmount);
};

export const depositTransfer = async (value: number) => {
  if (!address) return;
  const formattedAmount = formatAmount(value, decimalPlaces);
  const get_wallet_for_chain = async (): Promise<
    OfflineAminoSigner | OfflineDirectSigner
  > => {
    const signer = window?.keplr?.getOfflineSigner(chain_id);
    if (signer === undefined) {
      throw new Error('Keplr not found');
    }
    return signer;
  };
  // 3. Define the execute message
  const executeMsg = { Transfer: { amount: formattedAmount } };
  const wallet = await get_wallet_for_chain();

  const client = await SigningCosmWasmClient.connectWithSigner(
    rpcEndpoint,
    wallet,
    {
      gasPrice: GasPrice.fromString('0.025untrn'), // Set appropriate gas price
    }
  );

  const send_amount: Coin = {
    amount: formattedAmount.toString(),
    denom: 'untrn',
  };
  // 4. Execute the transaction
  try {
    const result = await client.execute(
      address,
      'neutron19z78v2lzp5ryyl4t3h67vquhtj7eg6uuk4zv2mh8rhyk02gkm4yq0h2su2',
      executeMsg,
      'auto',
      'memo',
      [send_amount]
    );
    return result;
  } catch (error) {
    console.error('Transaction failed:', error);
    throw error;
  }
};
