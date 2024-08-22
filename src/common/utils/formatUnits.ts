export const formatUnits = (num: number) => {
  if (!num) return '0.00';

  // 절대값으로 변환하여 음수 여부를 제거
  num = Math.abs(num);

  // 1B = 1 billion, 1M = 1 million, 1K = 1 thousand
  const units = ['', 'K', 'M', 'B'];
  let unitIndex = 0;

  while (num >= 1000 && unitIndex < units.length - 1) {
    num /= 1000;
    unitIndex++;
  }

  const formattedNumber = num.toFixed(2).replace(/\.00$/, '');

  return formattedNumber + units[unitIndex];
};
