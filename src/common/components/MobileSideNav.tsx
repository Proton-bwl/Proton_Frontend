import styled from '@emotion/styled';
import { IcModalX } from '../../mainPage/assets/0_index';
import { ReactNode, useRef } from 'react';
import useOutsideClick from '../hooks/useOutsideClick';

const MobileSideNav = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideClick(wrapperRef, onClose);

  return (
    <StMobileSideNav isOpen={isOpen} ref={wrapperRef}>
      <IcModalX onClick={onClose} />
      {children}
    </StMobileSideNav>
  );
};

export default MobileSideNav;

const StMobileSideNav = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: -2.5rem;
  right: -2rem;
  width: 30rem;
  height: 100vh;
  border-radius: 20px 0 0 20px;
  background: #21272a;
  color: white;
  padding: 2.5rem;
  transform: translateX(${(props) => (props.isOpen ? '0' : '100%')});
  transition: transform 0.3s ease;
  z-index: 999;
`;
