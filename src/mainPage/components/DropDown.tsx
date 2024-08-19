import styled from '@emotion/styled';
import { IcDropUp, IcDropdown } from '../assets/0_index';
import { useState } from 'react';
import { IDetail } from '../types/pnlChartType';
import { formatPercentValue } from '../../common/utils/formatPercentValue';

const DropDown = ({ detailData }: { detailData: IDetail }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StContainer
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      {isOpen ? (
        <StDropdown.Container>
          <StDropdown.Select>
            Detailed View
            <IcDropUp />
          </StDropdown.Select>
          <StDropdown.List>
            <li>
              <span>APY</span>
              <span>{formatPercentValue(detailData.apy)}%</span>
            </li>
            <li>
              <span>Win rate</span>
              <span>{formatPercentValue(detailData.winRate)}%</span>
            </li>
            <li>
              <span>MDD</span>
              <span>{formatPercentValue(detailData.mdd)}%</span>
            </li>
          </StDropdown.List>
        </StDropdown.Container>
      ) : (
        <StDropUp>
          Detailed View
          <IcDropdown />
        </StDropUp>
      )}
    </StContainer>
  );
};

export default DropDown;

const StContainer = styled.div`
  position: relative;
  width: 100%;
  ${({ theme }) => theme.fonts.caption};
  cursor: pointer;
`;

const StDropUp = styled(StContainer)`
  border: 1px solid #ffffff;
  border-radius: 6px;
  padding: 1.6rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StDropdown = {
  Container: styled.div`
    position: relative;
    width: 100%;
    border: 1px solid #ffffff;
    border-radius: 6px;
    padding: 1.6rem;
    display: flex;
    flex-direction: column;
    ${({ theme }) => theme.fonts.caption};
    background-color: ${({ theme }) => theme.colors.invest_background};
  `,
  Select: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${({ theme }) => theme.fonts.caption};
  `,
  List: styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 3rem 0 0.4rem;
    gap: 1.6rem;
    & > li {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  `,
};
