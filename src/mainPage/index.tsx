import * as St from './style_dashboard';
import Footer from '../common/components/Footer';
import Header from '../common/components/Header';
import { announceIMG } from './assets/0_index';
import { Outlet } from 'react-router-dom';
import useModal from '../common/hooks/useModal';
import BotModal from './components/BotModal';
import RemoveModal from './components/RemoveModal';
import WalletModal from '../wallet/components/WalletModal';
import { STCOMBackdrop } from '../common/styles/commonStyleComs';
import UnConnectModal from './components/UnConnectModal';
import DepositToast from '../common/components/DepositToast';
import useToast from '../common/hooks/useToast';
import { useState } from 'react';

const MainPage = () => {
  const { toast, showToast } = useToast();
  const [dataRefreshTrigger, setDataRefreshTrigger] = useState<boolean>(false);

  const handleDataRefreshRequest = () => {
    setDataRefreshTrigger((prev) => !prev); // 상태를 토글하여 Dashboard에 데이터 새로 고침을 트리거
  };

  //Bot Modal
  const {
    isModalOpen: isBotModalOpen,
    openModal: openBotMoal,
    closeModal: closeBotModal,
    botId: modalBotId,
  } = useModal();
  //remove Modal
  const {
    isModalOpen: isRemoveMoalOpen,
    openModal: openRemoveModal,
    closeModal: closeRemoveModal,
    botId: removeBotId,
  } = useModal();

  //wallet Modal
  const {
    isModalOpen: isWalletModalOpen,
    openModal: openWalletModal,
    closeModal: closeWalletModal,
  } = useModal();

  //unconnect Modal
  const {
    isModalOpen: isUnConnectMoalOpen,
    openModal: openUnConnectModal,
    closeModal: closeUnConnectModal,
  } = useModal();
  return (
    <>
      <Header openWalletModal={openWalletModal} />
      <St.MainContainer>
        <Announcement />
        <Dashboard
          openBotModal={openBotMoal}
          openRemoveModal={openRemoveModal}
          openUnConnectModal={openUnConnectModal}
          refreshTrigger={dataRefreshTrigger}
        />
        <Footer />
      </St.MainContainer>
      {(isBotModalOpen ||
        isRemoveMoalOpen ||
        isWalletModalOpen ||
        isUnConnectMoalOpen) && <STCOMBackdrop />}
      {isBotModalOpen && (
        <BotModal
          isOpen={isBotModalOpen}
          onClose={closeBotModal}
          botId={modalBotId}
          showToast={showToast}
          onDataRefreshRequest={handleDataRefreshRequest}
        />
      )}
      {isRemoveMoalOpen && (
        <RemoveModal
          isOpen={isRemoveMoalOpen}
          onClose={closeRemoveModal}
          botId={removeBotId}
        />
      )}
      {isWalletModalOpen && (
        <WalletModal isOpen={isWalletModalOpen} onClose={closeWalletModal} />
      )}
      {isUnConnectMoalOpen && (
        <UnConnectModal
          isOpen={isUnConnectMoalOpen}
          onClose={closeUnConnectModal}
        />
      )}
      {toast && <DepositToast message={toast.message} />}
    </>
  );
};

const Announcement = () => {
  return (
    <St.Announcement.GlassWrapper>
      <St.Announcement.Container>
        <St.Announcement.Label>Announcement</St.Announcement.Label>
        <St.Announcement.Text>
          Unlock the Full Potential of Your
        </St.Announcement.Text>
        <St.Announcement.Text>Investments with Proton!</St.Announcement.Text>
        <St.Announcement.Background
          src={announceIMG}
        ></St.Announcement.Background>
      </St.Announcement.Container>
    </St.Announcement.GlassWrapper>
  );
};

// Dashboard 컴포넌트

const Dashboard = ({
  openBotModal,
  openRemoveModal,
  openUnConnectModal,
  refreshTrigger,
}: {
  openBotModal: (id: string) => void;
  openRemoveModal: (id: string) => void;
  openUnConnectModal: () => void;
  refreshTrigger: boolean;
}) => {
  return (
    <St.Dashboard.Container>
      <Outlet
        context={{
          openBotModal,
          openRemoveModal,
          openUnConnectModal,
          refreshTrigger,
        }}
      />
    </St.Dashboard.Container>
  );
};

export default MainPage;
