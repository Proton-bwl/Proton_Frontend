export const formatPriceValue = (value: number) => {
  if (!value) return '0.00';
  // 숫자로 변환 후 소수점 이하 두 자리로 제한
  const number = value.toFixed(2);

  // 정수 부분과 소수 부분 분리
  const [integerPart, decimalPart] = number.split('.');

  // 정수 부분에 천 단위 구분 기호 추가
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // 포맷된 숫자 반환
  return `${formattedInteger}.${decimalPart}`;
};
