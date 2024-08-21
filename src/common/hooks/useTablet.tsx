import { useState, useEffect } from 'react';

const TABLETWIDTH = 1024;
// useMobile hook
const useTablet = () => {
  const [isTablet, setIsTablet] = useState(window.innerWidth <= TABLETWIDTH);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= TABLETWIDTH);
    };

    window.addEventListener('resize', handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isTablet;
};

export default useTablet;
