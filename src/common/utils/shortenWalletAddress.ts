export const shortenWalletAddress = (address: string) => {
  // if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
  //   throw new Error('유효하지 않은 주소입니다.');
  // }

  // 주소의 처음 5자리와 마지막 4자리 추출
  const start = address.slice(0, 10); // '0x' 제외 후 처음 5자리
  const end = address.slice(-8); // 마지막 4자리

  return `${start}.....${end}`;
};
