import styled from '@emotion/styled';
import { IcModalX, IcNotice } from '../assets/0_index';
import AreaChart from './AreaChart';
import {
  STCOMBackground,
  STCOMBlueBtn,
} from '../../common/styles/commonStyleComs';
import DropDown from './DropDown';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { IPnlChart } from '../types/pnlChartType';
import { DEPOSIT_PLACEHOLDER } from '../constants/DEPOSIT_PLACEHOLDER';
import { formatNumberWithCommas } from '../../common/utils/formatNumberWithCommas';
import { formatPercentValue } from '../../common/utils/formatPercentValue';
import { getBalance } from '../../common/utils/getBalance';
import useOutsideClick from '../../common/hooks/useOutsideClick';

const base_url = import.meta.env.VITE_BASE_URL;
const MINVAL = 10;
const BotModal = ({
  isOpen,
  onClose,
  botId,
  showToast,
}: {
  isOpen: boolean;
  onClose: () => void;
  botId: string | null;
  showToast: (message: string) => void;
}) => {
  const [depositValue, setDepositValue] = useState<string>('');
  const [placeholder, setPlaceholder] = useState(DEPOSIT_PLACEHOLDER.default);
  const [data, setData] = useState<IPnlChart>();
  const [balance, setBalance] = useState('-');
  const [user_id, setUserId] = useState(localStorage.getItem('NEUTRONADDRESS'));
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideClick(wrapperRef, onClose);

  useEffect(() => {
    // if (!user_id) return;
    setUserId(localStorage.getItem('NEUTRONADDRESS'));
    getData();
    if (!localStorage.getItem('NEUTRONADDRESS')) {
      setPlaceholder(DEPOSIT_PLACEHOLDER.notConnectWallet);
    }
    fetchBalance();
  }, []);
  if (!isOpen) return null;

  const fetchBalance = async () => {
    if (!user_id) return;
    const b = await getBalance(user_id);
    setBalance(b);
  };

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${base_url}/api/PnLChart?bot_id=${botId}&user_id=${user_id}&timeframe=5`
      );
      // if (data.Available === 0) {
      //   setPlaceholder(DEPOSIT_PLACEHOLDER.lackOfMoney);
      // }
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDepositValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatValue = formatNumberWithCommas(e.target.value);
    setDepositValue(formatValue);
  };

  const deposit = async (id: string | null) => {
    if (!id) return;
    const base_url = import.meta.env.VITE_BASE_URL;
    if (!localStorage.getItem('NEUTRONADDRESS') || !depositValue) return;
    try {
      const postData = {
        user_id: localStorage.getItem('NEUTRONADDRESS'), // 지갑 주소
        bot_id: id,
        amount: Number(depositValue.replace(/,/g, '')), // 입금할 금액
      };
      await axios.post(`${base_url}/api/deposit`, postData);
      onClose();
      showToast('Your deposit has been successfully completed!');
    } catch (err) {
      console.log(err);
    }
  };

  return data ? (
    <STCOMBackground>
      <StScroll>
        <StWrapper ref={wrapperRef}>
          <StSpaceBetween>
            <StModalTitle>{data.bot_name}</StModalTitle>
            <IcModalX onClick={onClose} style={{ cursor: 'pointer' }} />
          </StSpaceBetween>
          <StModalExplain>
            Cyclic arb bot automatically captures recurring price discrepancies
            between multiple exchanges, operating 24/7.
          </StModalExplain>
          <StColumn>
            <StSpaceBetween>
              <StModalLabel>Investment</StModalLabel>
              <StAvailable>
                <span>Available:</span> {balance}
                NTRN
              </StAvailable>
            </StSpaceBetween>
            <StinputContainer>
              <input
                placeholder={placeholder}
                value={depositValue}
                onChange={handleDepositValue}
              />
              <button onClick={() => setDepositValue(balance)}>Max</button>
            </StinputContainer>
          </StColumn>

          <StGraphContaienr>
            <p>Daily PnL(%): {formatPercentValue(data.daily_PnL)}%</p>
            <AreaChart chartData={data.data} />
          </StGraphContaienr>
          <DropDown detailData={data.detailInformation} />
          <StDepositBtn
            disabled={
              placeholder !== DEPOSIT_PLACEHOLDER.default ||
              !depositValue ||
              Number(depositValue.replace(/,/g, '')) < MINVAL
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
  overflow-y: auto;
  width: 56rem;
  max-height: 74.4rem;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.invest_background};
  z-index: 4;
  padding: 2.4rem;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none; /* 스크롤바 숨기기 */
  }
`;

const StWrapper = styled.div`
  width: 100%;
  height: 69.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;

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
