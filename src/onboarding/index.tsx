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
import { ABOUTQVE } from './constants.ts';

const OnBoarding = () => {
  return (
    <St.MainContainer>
      <Header />
      <OnBoarding1 />
      <OnBoarding2 />
      <OnBoarding3 />
    </St.MainContainer>
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

const OnBoarding2 = () => {
  return (
    <St.Section2.Container>
      <p>about QVE</p>
      <St.Section2.Title>
        Optimizing Yields in the Neutron Ecosystem
      </St.Section2.Title>
      <St.Section2.Contents>
        {ABOUTQVE.map((item) => {
          return (
            <St.Section2.AboutItem key={item.keyWord}>
              <div>
                <item.icon />
                <span>{item.keyWord}</span>
              </div>
              <St.Section2.AbouItemLayout>
                <St.Section2.ItemTitle>{item.title}</St.Section2.ItemTitle>
                <St.Section2.Explain>{item.explain}</St.Section2.Explain>
              </St.Section2.AbouItemLayout>
            </St.Section2.AboutItem>
          );
        })}
      </St.Section2.Contents>
    </St.Section2.Container>
  );
};

const OnBoarding3 = () => {
  return <St.Section1.Container></St.Section1.Container>;
};

export default OnBoarding;
