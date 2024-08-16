import {
  STCOMBackground,
  STCOMGreyBtn,
} from '../../common/styles/commonStyleComs';
import styled from '@emotion/styled';
import { IcModalX } from '../assets/0_index';
import axios from 'axios';

const RemoveModal = ({
  isOpen,
  onClose,
  botId,
}: {
  isOpen: boolean;
  onClose: () => void;
  botId?: string | null;
}) => {
  if (!isOpen) return;

  const remove = async () => {
    if (!localStorage.getItem('NEUTRONADDRESS')) return;
    const base_url = import.meta.env.VITE_BASE_URL;

    const postBody = {
      user_id: localStorage.getItem('NEUTRONADDRESS'),
      bot_id: botId,
    };
    try {
      await axios.post(`${base_url}/api/remove`, postBody);
      onClose();
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <STCOMBackground>
      <StWrapper>
        <StTop>
          <p>Remove</p>
          <IcModalX onClick={onClose} style={{ cursor: 'pointer' }} />
        </StTop>
        <StMiddle>
          <span>Are you sure you want to stop the</span>
          <span>CEX-DEX Arb BOT and close your trades?</span>
        </StMiddle>
        <StBottom>
          <StRemoveBtn onClick={remove}>Remove</StRemoveBtn>
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
