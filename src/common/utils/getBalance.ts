import { StargateClient } from '@cosmjs/stargate';

export const getBalance = async (address: string): Promise<string> => {
  const rpcEndpoint = 'https://neutron-rpc.publicnode.com/'; // 네트워크에 맞게 설정
  const client = await StargateClient.connect(rpcEndpoint);

  const balance = await client.getBalance(address, 'untrn'); // NTRN 토큰의 denom 설정
  const amount = balance.amount;

  // Calculate the balance in the correct format (convert from micro units)
  const balanceInUnits = Number(amount) / 1000000;

  // Round down to two decimal places
  const formattedNumber = Math.floor(balanceInUnits * 100) / 100;

  return formattedNumber.toFixed(2); // Always display two decimal places
};
