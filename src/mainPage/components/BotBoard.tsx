import styled from '@emotion/styled';
import {
  STCOMBlueBtn,
  STCOMGlassWrapper,
} from '../../common/styles/commonStyleComs';
import {
  IcPersons,
  LogoCyclicArbBot,
  LogoGradationBot,
  operatedLogo,
} from '../assets/0_index';
import { ITRADEBOTS } from '../types/dashboardType';
import { formatPriceValue } from '../../common/utils/formatPriceValue';
import { formatNumberValue } from '../../common/utils/formatNumberValue';
import { formatPercentValue } from '../../common/utils/formatPercentValue';
import PreviewChart from './PreviewChart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IChartData } from '../types/pnlChartType';

interface IBotBoardProps {
  data: ITRADEBOTS;
  active: string;
  openModal: (id: string) => void;
  openUnConnectModal: () => void;
  showToast: (message: string) => void;
}

const base_url = import.meta.env.VITE_BASE_URL;
// const user_id = localStorage.getItem('NEUTRONADDRESS');

const BotBoard = ({
  data: propsData,
  active,
  openModal,
  openUnConnectModal,
}: IBotBoardProps) => {
  const [chartData, setChartData] = useState<IChartData[]>();
  const [user_id, setUserId] = useState(localStorage.getItem('NEUTRONADDRESS'));
  useEffect(() => {
    if (!active) return;
    getData();
    setUserId(localStorage.getItem('NEUTRONADDRESS'));
  }, []);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${base_url}/api/PnLChart?bot_id=${active}&user_id=${user_id}&timeframe=5`
      );
      setChartData(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <StGlassWrapper>
      <StContainer>
        <StBotInfo>
          {active ? <StLogoCyclicArbBot /> : <StLogoGradationBot />}
          <StBotInfoLayout>
            <StBotName>{propsData.name}</StBotName>
            <div>
              <IcPersons />
              <StSubscriber>
                {formatNumberValue(propsData.subscriber)}
              </StSubscriber>
            </div>
          </StBotInfoLayout>
        </StBotInfo>
        {active ? (
          <>
            <StTotalProfitsContainer>
              <StTotalPRofits isPositive={propsData.total_profits >= 0}>
                <label>Total Profits</label>
                <p>{formatPercentValue(propsData.total_profits)} %</p>
              </StTotalPRofits>
              {chartData && <PreviewChart chartData={chartData} />}
            </StTotalProfitsContainer>
            <StBotSummaryValue>
              <div>
                <label>APY</label>
                <p>{formatPercentValue(propsData.apy)}%</p>
              </div>
              <div>
                <label>Runtime</label>
                <p>{propsData.runtime} Day</p>
              </div>
              <div>
                <label>TVL</label>
                <p>{formatPriceValue(propsData.tvl)} NTRN</p>
              </div>
            </StBotSummaryValue>
            <StBottomContainer>
              <StOperated>
                <label>operated in</label>
                <img src={operatedLogo} alt='' />
              </StOperated>
              <StDeposit
                onClick={() =>
                  user_id ? openModal(propsData.bot_id) : openUnConnectModal()
                }
              >
                Deposit
              </StDeposit>
            </StBottomContainer>
          </>
        ) : (
          <StComingSoon>Coming Soon...</StComingSoon>
        )}
      </StContainer>
    </StGlassWrapper>
  );
};

export default BotBoard;

const StGlassWrapper = styled(STCOMGlassWrapper)`
  min-width: 30rem;
  width: calc(50% - 1rem);
  max-width: 59rem;
  min-height: 45.4rem;
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    min-height: 33rem;
  }
`;

const StLogoGradationBot = styled(LogoGradationBot)`
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    width: 4rem;
  }
`;

const StLogoCyclicArbBot = styled(LogoCyclicArbBot)`
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    width: 4rem;
  }
`;

const StContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 3.6rem 4.6rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media (${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2.8rem 3rem;
    gap: 1.2rem;
  }
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.9rem 2.7rem;
  }
`;

const StBotInfo = styled.section`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding-bottom: 2rem;
  margin-bottom: 0.5rem;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.not_important};

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: 1.2rem;
    margin-bottom: 0;
  }
`;

const StSubscriber = styled.p`
  ${({ theme }) => theme.fonts.body_2_auto};
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
  ${({ theme }) => theme.fonts.title_2a};
  color: ${({ theme }) => theme.colors.white};

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    ${({ theme }) => theme.fonts.body_2_semibold};
  }
`;

const StTotalProfitsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StTotalPRofits = styled.div<{ isPositive: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  & > label {
    color: ${({ theme }) => theme.colors.not_important};
    ${({ theme }) => theme.fonts.body_1};
    line-height: 100%;
  }
  & > p {
    color: ${({ theme, isPositive }) =>
      isPositive ? theme.colors.positive : theme.colors.negative};
    ${({ theme }) => theme.fonts.title_1};
  }

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    gap: 0.1rem;
    & > label {
      ${({ theme }) => theme.fonts.body_2_semibold};
    }
    & > p {
      color: #19f6c1;
      ${({ theme }) => theme.fonts.title_2a};
    }
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
      ${({ theme }) => theme.fonts.body_2_semibold};
      @media (${({ theme }) => theme.breakpoints.mobile}) {
        ${({ theme }) => theme.fonts.caption};
      }
    }
    & > p {
      color: ${({ theme }) => theme.colors.white};
      ${({ theme }) => theme.fonts.body_2_bold};
      @media (${({ theme }) => theme.breakpoints.mobile}) {
        ${({ theme }) => theme.fonts.caption};
      }
    }

    &:nth-of-type(3) {
      align-items: end;
    }
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
    @media (${({ theme }) => theme.breakpoints.mobile}) {
      ${({ theme }) => theme.fonts.caption};
    }
  }

  & > img {
    width: 4.5rem;
    @media (${({ theme }) => theme.breakpoints.mobile}) {
      width: 2.8rem;
    }
  }
`;

const StDeposit = styled(STCOMBlueBtn)`
  padding: 1.25rem 3.7rem;
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.8rem 2.7rem;
    ${({ theme }) => theme.fonts.small_phrase};
  }
`;

const StComingSoon = styled.div`
  ${({ theme }) => theme.fonts.title_0_pre};
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
