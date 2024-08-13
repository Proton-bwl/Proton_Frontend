import styled from '@emotion/styled';
import { IcDashboard, IcTradeBots } from '../assets/0_index';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const VIEW = {
  TRADE_BOTS: 'Trade Bots',
  DASHBOARD: 'Dashboard',
};

const SelectView = ({ view }: { view: string }) => {
  const navigate = useNavigate();

  const handleView = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.name === VIEW.TRADE_BOTS) {
      navigate('/tradeBots');
    } else {
      navigate('/dashboard');
    }
  };
  return (
    <StContainer>
      <StBtn
        selectView={view}
        type='button'
        name={VIEW.TRADE_BOTS}
        onClick={handleView}
      >
        {view === VIEW.TRADE_BOTS ? <IcTradeBots /> : <></>}
        {VIEW.TRADE_BOTS}
      </StBtn>
      <StBtn
        selectView={view}
        type='button'
        name={VIEW.DASHBOARD}
        onClick={handleView}
      >
        {view === VIEW.DASHBOARD ? <IcDashboard /> : <></>}
        {VIEW.DASHBOARD}
      </StBtn>
    </StContainer>
  );
};

export default SelectView;

const StContainer = styled.div`
  display: flex;
`;

const StBtn = styled.button<{
  selectView: string;
  name: string;
}>`
  width: 13.6rem;
  height: 6.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  background-color: transparent;
  color: ${({ selectView, name, theme }) =>
    selectView === name ? theme.colors.white : theme.colors.not_important};
  border-bottom: ${({ selectView, name }) =>
    selectView === name ? '2px solid #fff;' : ''};
  cursor: pointer;
  ${({ theme }) => theme.fonts.body_1};
`;
