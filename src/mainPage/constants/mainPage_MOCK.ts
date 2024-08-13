import { IDashboard, ITRADEBOTS } from '../types/dashboardType';

export const MOCK_DASHBOARD: IDashboard = {
  total_balance: 10000,
  total_profit: 2000,
  total_balance_usdt: 30000,
  total_profit_usdt: 6000,
  bots: [
    {
      bot_id: 'Cyclic Arb bot',
      total_investment: 5000,
      current_value: 5500,
      daily_pnl: 100,
      total_profit: 500,
    },
  ],
};

export const MOCK_TRADEBOTS: ITRADEBOTS[] = [
  {
    bot_id: 'bot_001',
    name: 'Arb Bot',
    subscriber: 100,
    total_profits: 20000,
    apy: 15.5,
    runtime: 10,
    tvl: 1500000,
    operated_in: 'Neutron',
  },
  {
    bot_id: '',
    name: 'NTRN/USDT Arb bot',
    subscriber: 0,
    total_profits: 0,
    apy: 0,
    runtime: 0,
    tvl: 0,
    operated_in: 'Neutron',
  },
];
