import { useState, useEffect } from 'react';
import { theme } from '../styles/theme';

// useMobile hook
const useMobile = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= theme.breakpoints.mobile
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= theme.breakpoints.mobile);
    };

    window.addEventListener('resize', handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

export default useMobile;
