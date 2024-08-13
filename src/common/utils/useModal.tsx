import { useState, useCallback, useEffect } from 'react';

function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [botId, setBotId] = useState<string | null>(null);

  const openModal = useCallback((id?: string) => {
    if (id) {
      setBotId(id);
    }
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setBotId(null);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'; // 스크롤 막기
    } else {
      document.body.style.overflow = ''; // 스크롤 복구
    }

    return () => {
      // 컴포넌트 언마운트 시 스타일 복구
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return {
    isModalOpen,
    openModal,
    closeModal,
    botId,
  };
}

export default useModal;
