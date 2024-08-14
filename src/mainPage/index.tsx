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

const MainPage = () => {
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
  return (
    <>
      <Header openWalletModal={openWalletModal} />
      <St.MainContainer>
        <Announcement />
        <Dashboard
          openBotModal={openBotMoal}
          openRemoveModal={openRemoveModal}
        />
        <Footer />
      </St.MainContainer>
      {(isBotModalOpen || isRemoveMoalOpen || isWalletModalOpen) && (
        <STCOMBackdrop />
      )}
      {isBotModalOpen && (
        <BotModal
          isOpen={isBotModalOpen}
          onClose={closeBotModal}
          botId={modalBotId}
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
        <St.Announcement.Text>Investments with QVE!</St.Announcement.Text>
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
}: {
  openBotModal: (id: string) => void;
  openRemoveModal: () => void;
}) => {
  return (
    <St.Dashboard.Container>
      <Outlet context={{ openBotModal, openRemoveModal }} />
    </St.Dashboard.Container>
  );
};

export default MainPage;
