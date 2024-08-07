import * as St from './style_dashboard';
import Footer from '../common/components/Footer';
import Header from '../common/components/Header';

const Dashborad = () => {
  return (
    <St.MainContainer>
      <Header />
      <section style={{ minHeight: '55rem' }}></section>
      <Footer />
    </St.MainContainer>
  );
};

export default Dashborad;
