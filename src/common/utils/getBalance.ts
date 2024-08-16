import { StargateClient } from '@cosmjs/stargate';

export const getBalance = async (address: string): Promise<string> => {
  const rpcEndpoint = 'https://neutron-rpc.publicnode.com/'; // 네트워크에 맞게 설정
  const client = await StargateClient.connect(rpcEndpoint);

  const balance = await client.getBalance(address, 'untrn'); // NTRN 토큰의 denom 설정
  const amount = balance.amount;
  const formattedNumber = (Number(amount) / 1000000).toFixed(2);
  return formattedNumber;
};
