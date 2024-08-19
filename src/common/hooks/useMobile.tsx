import { useState, useEffect } from 'react';

const MOBILEWIDTH = 768;
// useMobile hook
const useMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILEWIDTH);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILEWIDTH);
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
