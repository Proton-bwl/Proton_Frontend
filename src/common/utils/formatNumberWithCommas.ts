export const formatNumberWithCommas = (value: string): string => {
  // 입력값에서 숫자와 소수점만 허용
  const inputValue = value.replace(/[^0-9.]/g, '');

  // 정수 부분과 소수 부분을 분리
  const [integerPart, decimalPart] = inputValue.split('.');

  // 정수 부분에서 숫자가 아닌 문자 제거
  const cleanedIntegerPart = integerPart.replace(/[^0-9]/g, '');

  // 정수 부분에 천 단위 쉼표 추가
  const formattedIntegerPart = cleanedIntegerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ','
  );

  // 소수 부분이 있는 경우, 최대 두 자리까지만 허용
  let cleanedDecimalPart = decimalPart
    ? decimalPart.replace(/[^0-9]/g, '')
    : '';

  if (cleanedDecimalPart.length > 2) {
    cleanedDecimalPart = cleanedDecimalPart.substring(0, 2);
  }

  // 소수점과 함께 반환
  if (decimalPart !== undefined) {
    return `${formattedIntegerPart}.${cleanedDecimalPart}`;
  } else {
    return formattedIntegerPart;
  }
};
