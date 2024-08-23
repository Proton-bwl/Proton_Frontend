import {
  STCOMBackground,
  STCOMGreyBtn,
} from '../../common/styles/commonStyleComs';
import styled from '@emotion/styled';
import { IcModalX } from '../assets/0_index';
import axios from 'axios';
import { useRef, useState } from 'react';
import useOutsideClick from '../../common/hooks/useOutsideClick';

const RemoveModal = ({
  isOpen,
  onClose,
  botId,
}: {
  isOpen: boolean;
  onClose: () => void;
  botId?: string | null;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideClick(wrapperRef, onClose);
  const [isLoading, setIsLoading] = useState(false);
  if (!isOpen) return;

  const remove = async () => {
    if (!localStorage.getItem('NEUTRONADDRESS')) return;
    const base_url = import.meta.env.VITE_BASE_URL;

    const postBody = {
      user_id: localStorage.getItem('NEUTRONADDRESS'),
      bot_id: botId,
    };
    try {
      setIsLoading(true);
      await axios.post(`${base_url}/api/remove`, postBody);
      onClose();
      setIsLoading(false);
      window.location.reload();
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setIsLoading(false);
        err.response.status === 499 &&
          alert('You can remove this bot after 3 days of deposing!');
        return;
      }
    }
  };

  return (
    <STCOMBackground>
      <StWrapper ref={wrapperRef}>
        <StTop>
          <p>Remove</p>
          <IcModalX onClick={onClose} style={{ cursor: 'pointer' }} />
        </StTop>
        <StMiddle>
          <span>Are you sure you want to stop the</span>
          <span>Cyclic Arb BOT and close your trades?</span>
        </StMiddle>
        <StBottom>
          <StRemoveBtn onClick={remove}>
            {isLoading ? 'Removing Bot..' : 'Remove'}
          </StRemoveBtn>
        </StBottom>
      </StWrapper>
    </STCOMBackground>
  );
};

export default RemoveModal;

const StWrapper = styled.div`
  width: 56rem;
  height: 25.2rem;
  border-radius: 16px;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.colors.invest_background};
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > * {
    width: 100%;
  }
`;

const StTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.fonts.body_2};
`;

const StMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.fonts.small_phrase};
`;

const StBottom = styled.div`
  display: flex;
  justify-content: end;
`;

const StRemoveBtn = styled(STCOMGreyBtn)`
  width: 14.7rem;
  height: 4.5rem;
`;
