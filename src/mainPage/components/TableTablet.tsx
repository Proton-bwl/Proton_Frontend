import {
  STCOMBlueBtn,
  STCOMGreyBtn,
} from '../../common/styles/commonStyleComs';
import { formatPriceValue } from '../../common/utils/formatPriceValue';
import { formatUnits } from '../../common/utils/formatUnits';
import { DASHBORADTABLEHEADER } from '../constants/DASHBOARD';
import { IBOTS } from '../types/dashboardType';
import styled from '@emotion/styled';

const TableTablet = ({
  data,
  openBotModal,
  openRemoveModal,
}: {
  data: IBOTS[];
  openBotModal: (id: string) => void;
  openRemoveModal: (id: string) => void;
}) => {
  const TOKEN = 'NTRN';
  return (
    <StWrapper>
      {data.map((item) => (
        <StContainer key={item.bot_id}>
          <StBotName>{item.bot_name}</StBotName>
          <StRow>
            <span>{DASHBORADTABLEHEADER[1]}</span>
            <span>
              {formatPriceValue(item.total_investment)} {TOKEN}
            </span>
          </StRow>
          <StRow>
            <span>{DASHBORADTABLEHEADER[2]}</span>
            <span>
              {formatPriceValue(item.current_value)} {TOKEN}
            </span>
          </StRow>
          <StRow>
            <span>{DASHBORADTABLEHEADER[3]}</span>
            <span>
              <StColor isPositive={item.daily_pnl >= 0}>
                {formatUnits(item.daily_pnl)} {TOKEN}
              </StColor>
            </span>
          </StRow>
          <StRow>
            <span>{DASHBORADTABLEHEADER[4]}</span>
            <span>
              <StColor isPositive={item.total_profit >= 0}>
                {formatPriceValue(item.total_profit)} {TOKEN}
              </StColor>
            </span>
          </StRow>
          <StRow>
            <span>Action</span>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <StAddBtn onClick={() => openBotModal(item.bot_id)}>Add</StAddBtn>
              <StRemoveBtn onClick={() => openRemoveModal(item.bot_id)}>
                Remove
              </StRemoveBtn>
            </div>
          </StRow>
        </StContainer>
      ))}
    </StWrapper>
  );
};

export default TableTablet;

const StBotName = styled.p`
  ${({ theme }) => theme.fonts.body_1};
  padding: 1rem 0;
`;

const StWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StContainer = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.not_important};
  border-bottom: 1px solid ${({ theme }) => theme.colors.not_important};
  padding: 2rem 0rem 2rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const StRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.fonts.body_3m};
`;

const StColor = styled.span<{ isPositive: boolean }>`
  color: ${({ theme, isPositive }) =>
    isPositive ? theme.colors.positive : theme.colors.negative};
  &::before {
    content: ${(props) => (props.isPositive ? '+' : '')};
  }
`;

const StAddBtn = styled(STCOMBlueBtn)`
  padding: 1.5rem 2.8rem;
  ${({ theme }) => theme.fonts.caption};
  margin-right: 1rem;
`;

const StRemoveBtn = styled(STCOMGreyBtn)`
  padding: 1.5rem 1.6rem;
  ${({ theme }) => theme.fonts.caption};
`;
