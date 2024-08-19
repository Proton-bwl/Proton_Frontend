import Header from '../common/components/Header';
import * as St from './style_onboarding.tsx';
import {
  ProtonLogo,
  onBoardingBackImg1,
  onBoardingBackImg2,
  onBoardingBackImg3,
} from '../common/assets/0_index';
import {
  IcGitbub,
  IcMedium,
  IcTelegram,
  IcTwitter,
  Neutron,
  onboarding3,
} from './assets/0_index';
import { ABOUTQVE } from './constants/constants.ts';
import TradeNowBtn from './Components/TradeNowBtn.tsx';
import Footer from '../common/components/Footer.tsx';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { formatPriceValue } from '../common/utils/formatPriceValue.ts';
import {
  moveGithub,
  moveMedium,
  moveTelegram,
  moveTwitter,
} from '../common/utils/moveLink.ts';
import { STCOMGlassWrapper } from '../common/styles/commonStyleComs.ts';
import { ONBOARDING4 } from './constants/constants.ts';

const OnBoarding = () => {
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const headerOffset = 100;
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Header
        scrollToSection={scrollToSection}
        section2Ref={section2Ref}
        section3Ref={section3Ref}
        section4Ref={section4Ref}
      />
      <St.MainContainer>
        <OnBoarding1 />
        <div ref={section2Ref}>
          <OnBoarding2 />
        </div>
        <div ref={section3Ref}>
          <OnBoarding3 />
        </div>
        <div ref={section4Ref}>
          <OnBoarding4 />
        </div>
        <Footer />
      </St.MainContainer>
    </>
  );
};

const OnBoarding1 = () => {
  const base_url = import.meta.env.VITE_BASE_URL;
  const [totalValueLocked, setTotalValueLocked] = useState(0);
  const getData = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/onboarding`);
      setTotalValueLocked(data.total_value_locked);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <St.Section1.Container>
      <St.Section1.BackgroundImg1 src={onBoardingBackImg1} alt='cubeIMG' />
      <St.Section1.ContentLayout>
        <St.Section1.QVEIntroduce>
          <h1>Quant Vault Escrow Protocol</h1>
          <ProtonLogo />
          <p>
            A hybrid DeFi platform combining arbitrage trading bots and
            liquidity staking protocols in Neutron
          </p>
        </St.Section1.QVEIntroduce>
        <St.Section1.TotalValue>
          <p>Total Value Locked</p>
          <p>$ {formatPriceValue(totalValueLocked)}</p>
        </St.Section1.TotalValue>
      </St.Section1.ContentLayout>
      <St.Section1.Bottom>
        <nav>
          <IcTwitter onClick={moveTwitter} />
          <IcTelegram onClick={moveTelegram} />
          <IcMedium onClick={moveMedium} />
          <IcGitbub onClick={moveGithub} />
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
      <p>About Proton</p>
      <St.Title>Optimizing Yields in the Neutron Ecosystem</St.Title>
      <St.Section2.Contents>
        {ABOUTQVE.map((item) => {
          return (
            <STCOMGlassWrapper key={item.keyWord}>
              <St.Section2.AboutItem>
                <St.Section2.IconContainer>
                  <item.icon />
                  <span>{item.keyWord}</span>
                </St.Section2.IconContainer>
                <St.Section2.AbouItemLayout>
                  <St.Section2.ItemTitle>{item.title}</St.Section2.ItemTitle>
                  <St.Section2.Explain>{item.explain}</St.Section2.Explain>
                </St.Section2.AbouItemLayout>
              </St.Section2.AboutItem>
            </STCOMGlassWrapper>
          );
        })}
      </St.Section2.Contents>
    </St.Section2.Container>
  );
};

const OnBoarding3 = () => {
  return (
    <St.Section3.Container>
      <St.Section3.BackgroundImg
        src={onBoardingBackImg2}
        alt='background-img'
      />
      <St.Section3.BackgroundImg2
        src={onBoardingBackImg3}
        alt='background-img'
      />
      <St.Section3.InTro>
        <St.PreTitle>
          Proton offers various ‘vaults’, which are operated by the trading bots
        </St.PreTitle>
        <St.Title>Assets Into The Vault</St.Title>
        <St.Section3.SubTitle>
          (Arbitrage is one of the strategies we use)
        </St.Section3.SubTitle>
      </St.Section3.InTro>

      <img
        style={{ width: '69.4rem', margin: '6.4rem 0 13rem' }}
        src={onboarding3}
      />
    </St.Section3.Container>
  );
};

const OnBoarding4 = () => {
  return (
    <St.Section4.Container>
      <St.PreTitle>Asset Management Process</St.PreTitle>
      <St.Title>Automated Trading Strategy</St.Title>
      <St.Section4.ImgContainer>
        {ONBOARDING4.map((item) => (
          <St.Section4.ItemWrapper key={item.label}>
            <img src={item.icon} alt={item.label} />
            {item.label}
          </St.Section4.ItemWrapper>
        ))}
      </St.Section4.ImgContainer>
      <TradeNowBtn />
    </St.Section4.Container>
  );
};

export default OnBoarding;
