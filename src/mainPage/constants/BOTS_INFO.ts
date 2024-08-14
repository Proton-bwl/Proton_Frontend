import { FunctionComponent, SVGProps } from 'react';
import { LogoCyclicArbBot, LogoGradationBot } from '../assets/0_index';

interface IBotLogo {
  'Bot One': FunctionComponent<SVGProps<SVGSVGElement>>;
  'Bot Two': FunctionComponent<SVGProps<SVGSVGElement>>;
  'NTRN/USDT Arb bot': FunctionComponent<SVGProps<SVGSVGElement>>;
}

export const BOT_LOGO: IBotLogo = {
  'Bot One': LogoCyclicArbBot,
  'Bot Two': LogoCyclicArbBot,
  'NTRN/USDT Arb bot': LogoGradationBot,
};
