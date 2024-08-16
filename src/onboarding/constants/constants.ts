import { FunctionComponent, SVGProps } from 'react';
import {
  IcProfits,
  IcRisk,
  IcSafety,
  IcDepositFunds,
  IcGenerateProfits,
  IcLiquiryPosition,
  IcWithdrawAssets,
} from '../assets/0_index';

interface IAboutQve {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  keyWord: string;
  title: string;
  explain: string;
}

interface IOnboarding4 {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  label: string;
}

export const ABOUTQVE: IAboutQve[] = [
  {
    icon: IcProfits,
    keyWord: 'Profits',
    title: 'Optimize profit',
    explain:
      'A yield-maximizing bot uses AI and algorithms to automate investment strategies.',
  },
  {
    icon: IcRisk,
    keyWord: 'Risk',
    title: 'Minimize Risk',
    explain:
      'Our approach minimizes risk and secures earnings without major losses.',
  },
  {
    icon: IcSafety,
    keyWord: 'Safety',
    title: 'Stability and Security',
    explain:
      'We use advanced algorithms to balance asset prices on Neutron DEXs, ensuring stable profits.',
  },
];

export const ONBOARDING4: IOnboarding4[] = [
  {
    icon: IcDepositFunds,
    label: 'Deposit Funds',
  },
  {
    icon: IcGenerateProfits,
    label: 'Generate Profits',
  },
  {
    icon: IcLiquiryPosition,
    label: 'Liquify Position',
  },
  {
    icon: IcWithdrawAssets,
    label: 'Withdraw Assets',
  },
];
