import { useState, useCallback } from 'react';

interface ToastMessage {
  message: string;
}

const useToast = () => {
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const showToast = useCallback((message: string) => {
    setToast({ message });

    // 일정 시간 후 자동으로 토스트 메시지 제거
    setTimeout(() => {
      setToast(null);
    }, 2000); // 3초 후 제거
  }, []);

  return {
    toast,
    showToast,
  };
};

export default useToast;
