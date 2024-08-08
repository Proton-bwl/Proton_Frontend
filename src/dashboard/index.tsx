import * as St from './style_dashboard';
import Footer from '../common/components/Footer';
import Header from '../common/components/Header';
import { announceIMG } from './assets/0_index';

const Dashborad = () => {
  return (
    <St.MainContainer>
      <Header />
      <Announcement />
      <Footer />
    </St.MainContainer>
  );
};

const Announcement = () => {
  return (
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
  );
};

export default Dashborad;
