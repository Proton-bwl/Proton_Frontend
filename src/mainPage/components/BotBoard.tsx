import styled from '@emotion/styled';
import {
  STCOMBlueBtn,
  STCOMBoxWrapper,
} from '../../common/styles/commonStyleComs';
import {
  Graph,
  IcPersons,
  LogoCyclicArbBot,
  operatedLogo,
} from '../assets/0_index';
import { ITRADEBOTS } from '../types/dashboardType';
import { formatPriceValue } from '../../common/utils/formatPriceValue';
import { formatNumberValue } from '../../common/utils/formatNumberValue';
import { formatPercentValue } from '../../common/utils/formatPercentValue';
import { BOT_LOGO } from '../constants/BOTS_INFO';
import React from 'react';

interface IBotBoardProps {
  data: ITRADEBOTS;
  active: string;
  openModal: (id: string) => void;
}
interface BotIconProps {
  botType: keyof typeof BOT_LOGO; // 'cyclicArbBot' | 'anotherBot' 등
}

const BotIcon: React.FC<BotIconProps> = ({ botType }: { botType: string }) => {
  const SelectedIcon = BOT_LOGO[botType];

  return <SelectedIcon />;
};

const BotBoard = ({ data, active, openModal }: IBotBoardProps) => {
  return (
    <StContainer>
      <StBotInfo>
        {/* <LogoCyclicArbBot /> */}
        <BotIcon botType={data.name} />
        <StBotInfoLayout>
          <StBotName>{data.name}</StBotName>
          <div>
            <IcPersons />
            <p>{formatNumberValue(data.subscriber)}</p>
          </div>
        </StBotInfoLayout>
      </StBotInfo>
      {active ? (
        <>
          <StTotalProfitsContainer>
            <StTotalPRofits>
              <label>Total Profits</label>
              <p>{formatPercentValue(data.total_profits)} %</p>
            </StTotalPRofits>
            <Graph />
          </StTotalProfitsContainer>
          <StBotSummaryValue>
            <div>
              <label>APY</label>
              <p>{formatPercentValue(data.apy)}%</p>
            </div>
            <div>
              <label>Runtime</label>
              <p>{data.runtime} Day</p>
            </div>
            <div>
              <label>TVL</label>
              <p>{formatPriceValue(data.tvl)} NTRN</p>
            </div>
          </StBotSummaryValue>
          <StBottomContainer>
            <StOperated>
              <label>operated in</label>
              <img src={operatedLogo} alt='' />
            </StOperated>
            <StDeposit onClick={() => openModal(data.bot_id)}>
              Deposit
            </StDeposit>
          </StBottomContainer>
        </>
      ) : (
        <StComingSoon>Coming Soon...</StComingSoon>
      )}
    </StContainer>
  );
};

export default BotBoard;

const StContainer = styled(STCOMBoxWrapper)`
  min-width: 43.2rem;
  width: calc(50% - 1rem);
  max-width: 59rem;
  min-height: 45.4rem;
  padding: 3.6rem 4.6rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const StBotInfo = styled.section`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding-bottom: 2rem;
  margin-bottom: 0.5rem;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.not_important};
`;

const StBotInfoLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > div {
    display: flex;
    gap: 0.3rem;
    align-items: center;
    color: ${({ theme }) => theme.colors.sub_white};
    ${({ theme }) => theme.fonts.body_2_auto};
  }
`;

const StBotName = styled.p`
  ${({ theme }) => theme.fonts.title_2};
  color: ${({ theme }) => theme.colors.white};
`;

const StTotalProfitsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StTotalPRofits = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  & > label {
    color: ${({ theme }) => theme.colors.not_important};
    ${({ theme }) => theme.fonts.body_1};
    line-height: 100%;
  }
  & > p {
    color: #19f6c1;
    ${({ theme }) => theme.fonts.title_1};
  }
`;

const StBotSummaryValue = styled.div`
  display: flex;
  justify-content: space-between;
  & div {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    & > label {
      color: ${({ theme }) => theme.colors.not_important};
      ${({ theme }) => theme.fonts.body_2_auto};
    }
    & > p {
      color: ${({ theme }) => theme.colors.white};
      ${({ theme }) => theme.fonts.body_2_bold};
    }
  }

  & div:nth-of-type(3) {
    align-items: end;
  }
`;

const StBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const StOperated = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 0.5rem;
  & label {
    color: ${({ theme }) => theme.colors.not_important};
    ${({ theme }) => theme.fonts.body_2_auto};
  }

  & > img {
    width: 4.5rem;
  }
`;

const StDeposit = styled(STCOMBlueBtn)`
  padding: 1.25rem 3.7rem;
`;

const StComingSoon = styled.div`
  ${({ theme }) => theme.fonts.title_0_pre};
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
