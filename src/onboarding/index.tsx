import Header from '../common/components/Header';
import * as St from './style_onboarding';
import { QveLogo, onBoardingCube } from '../common/assets/0_index';
import {
  IcGitbub,
  IcMedium,
  IcTelegram,
  IcTwitter,
  Neutron,
} from './assets/0_index';

const OnBoarding = () => {
  return (
    <St.Container>
      <Header />
      <OnBoarding1 />
    </St.Container>
  );
};

const OnBoarding1 = () => {
  return (
    <St.Section1.Container>
      <St.Section1.BackgroundImg1 src={onBoardingCube} alt='cubeIMG' />
      <St.Section1.BackgroundImg2 src={onBoardingCube} alt='cubeIMG' />
      <St.Section1.ContentLayout>
        <St.Section1.QVEIntroduce>
          <h1>Quant Vault Escrow Protocol</h1>
          <QveLogo />
          <p>
            A hybrid DeFi platform combining arbitrage trading bots and
            liquidity staking protocols in Neutron
          </p>
        </St.Section1.QVEIntroduce>
        <St.Section1.TotalValue>
          <p>Total Value Locked</p>
          <p>$351,276,998.12</p>
        </St.Section1.TotalValue>
      </St.Section1.ContentLayout>
      <St.Section1.Bottom>
        <nav>
          <IcTwitter />
          <IcTelegram />
          <IcMedium />
          <IcGitbub />
        </nav>
        <p>Ecosystem</p>
        <Neutron />
      </St.Section1.Bottom>
    </St.Section1.Container>
  );
};

export default OnBoarding;
