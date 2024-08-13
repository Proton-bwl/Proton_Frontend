import styled from '@emotion/styled';
import { IcModalX, IcNotice } from '../assets/0_index';
import AreaChart from './AreaChart';
import {
  STCOMBackground,
  STCOMBlueBtn,
} from '../../common/styles/commonStyleComs';
import DropDown from './DropDown';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { formatPriceValue } from '../../common/utils/formatPriceValue';
import { IPnlChart } from '../types/pnlChartType';
import { DEPOSIT_PLACEHOLDER } from '../constants/DEPOSIT_PLACEHOLDER';

const base_url = import.meta.env.VITE_BASE_URL;
const user_id = localStorage.getItem('NEUTRONADDRESS');

const BotModal = ({
  isOpen,
  onClose,
  botId,
}: {
  isOpen: boolean;
  onClose: () => void;
  botId: string | null;
}) => {
  const [depositValue, setDepositValue] = useState<string>('');
  const [placeholder, setPlaceholder] = useState(DEPOSIT_PLACEHOLDER.default);
  const [data, setData] = useState<IPnlChart>();

  useEffect(() => {
    getData();
    if (!localStorage.getItem('NEUTRONADDRESS')) {
      setPlaceholder(DEPOSIT_PLACEHOLDER.notConnectWallet);
    }
  }, []);
  if (!isOpen) return null;

  const getData = async () => {
    console.log(botId);
    try {
      const { data } = await axios.get(
        `${base_url}/api/PnLChart?bot_id=${botId}&user_id=${user_id}&timeframe=5`
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDepositValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepositValue(e.target.value);
  };

  const deposit = async (id: string | null) => {
    if (!id) return;
    const base_url = import.meta.env.VITE_BASE_URL;
    if (!localStorage.getItem('NUETRONADDRESS') || !depositValue) return;
    try {
      const postData = {
        user_id: localStorage.getItem('NUETRONADDRESS'), // 지갑 주소
        bot_id: id,
        amount: depositValue, // 입금할 금액
      };
      await axios.post(`${base_url}/api/deposit`, postData);
    } catch (err) {
      console.log(err);
    }
  };

  return data ? (
    <STCOMBackground>
      <StScroll>
        <StWrapper>
          <StSpaceBetween>
            <StModalTitle>Cyclic Arb bot</StModalTitle>
            <IcModalX onClick={onClose} />
          </StSpaceBetween>
          <StModalExplain>
            Cyclic arb bot automatically captures recurring price discrepancies
            between multiple exchanges, operating 24/7.
          </StModalExplain>
          <StColumn>
            <StSpaceBetween>
              <StModalLabel>Investment</StModalLabel>
              <StAvailable>
                <span>Available:</span> {formatPriceValue(data.Available)} NTRN
              </StAvailable>
            </StSpaceBetween>
            <StinputContainer>
              <input
                placeholder={placeholder}
                value={depositValue}
                onChange={handleDepositValue}
              />
              <button>Max</button>
            </StinputContainer>
          </StColumn>

          <StGraphContaienr>
            <p>Daily PnL(%): 56.12%</p>
            <AreaChart chartData={data.data} />
          </StGraphContaienr>
          <DropDown />
          <StDepositBtn
            disabled={
              placeholder !== DEPOSIT_PLACEHOLDER.default || !depositValue
            }
            onClick={() => deposit(botId)}
          >
            Deposit
          </StDepositBtn>
          <StModalNotice>
            <IcNotice />
            <span>
              You are using a shared parameter. As market conditions differ,
              these parameters cannot guarantee the same results.
            </span>
          </StModalNotice>
        </StWrapper>
      </StScroll>
    </STCOMBackground>
  ) : (
    <>loading...</>
  );
};

export default BotModal;

const StScroll = styled.div`
  overflow-y: scroll;
  width: 56rem;
  max-height: 74.4rem;
  height: 100%;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.invest_background};
  z-index: 4;
`;

const StWrapper = styled.div`
  width: 100%;
  /* height: 1000px; */
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  /* display: block; */

  & > * {
    width: 100%;
  }
`;

const StSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StModalTitle = styled.p`
  ${({ theme }) => theme.fonts.body_2};
  color: ${({ theme }) => theme.colors.white};
`;

const StModalExplain = styled.p`
  ${({ theme }) => theme.fonts.small_phrase};
  color: ${({ theme }) => theme.colors.sub_white};
`;

const StColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StModalLabel = styled.label`
  ${({ theme }) => theme.fonts.body_2};
  color: ${({ theme }) => theme.colors.white};
`;

const StAvailable = styled.p`
  ${({ theme }) => theme.fonts.body_3};
  color: ${({ theme }) => theme.colors.white};

  & > span {
    color: ${({ theme }) => theme.colors.not_important};
  }
`;

const StinputContainer = styled.div`
  width: 100%;
  height: 5rem;
  padding: 1.4rem 1.5rem;
  border-radius: 6px;
  border: 0.1rem solid ${({ theme }) => theme.colors.not_important};
  background-color: #4f4f4f;
  position: relative;

  & > input {
    width: 80%;
    background-color: transparent;
    border: none;
    ${({ theme }) => theme.fonts.body_3};
    outline: none;
    color: ${({ theme }) => theme.colors.white};
  }

  & > button {
    position: absolute;
    right: 1.1rem;
    top: 1rem;
    width: 6.6rem;
    height: 3rem;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.sub_white};
    background: linear-gradient(
      144deg,
      rgba(255, 255, 255, 0.1) -9.46%,
      rgba(255, 255, 255, 0.25) 115.25%
    );
    ${({ theme }) => theme.fonts.caption};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const StGraphContaienr = styled.div`
  position: relative;
  width: 100%;
  height: 27.5rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  padding: 1.6rem;

  & > p {
    ${({ theme }) => theme.fonts.caption};
  }
`;

const StDepositBtn = styled(STCOMBlueBtn)<{ disabled: boolean }>`
  width: 100%;
  min-height: 4.6rem;
  ${(props) => props.disabled && ' background-color: #ccc'};
`;

const StModalNotice = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 5.8rem;
  background-color: #4f4f4f;
  padding: 1.2rem 2.4rem;
  ${({ theme }) => theme.fonts.caption};
  gap: 0.9rem;
  line-height: 120%;
`;
