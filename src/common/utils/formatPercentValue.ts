export const formatPercentValue = (value: number) => {
  if (!value) return '0.00';
  // 숫자로 변환 후 소수점 이하 두 자리로 제한
  value = Math.abs(value);
  return value.toFixed(2);
};
