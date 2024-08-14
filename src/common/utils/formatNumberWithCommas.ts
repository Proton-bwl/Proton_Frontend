export const formatNumberWithCommas = (value: string): string => {
  // 숫자 이외의 문자를 제거
  const numericValue = value.replace(/[^0-9]/g, '');
  // 숫자에 천 단위 쉼표 추가
  return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
