export const disconnectWallet = async () => {
  const { keplr } = window;

  if (!keplr) {
    alert('Keplr를 설치하셔야 합니다.');
    return;
  }

  try {
    // Keplr와의 연결 해제
    await window.keplr?.disable();
    await localStorage.clear();
  } catch (error) {
    console.error('연결 해제 실패:', error);
    alert('연결 해제에 실패했습니다.');
  }
};
