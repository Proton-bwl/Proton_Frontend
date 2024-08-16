export interface IDashboard {
  total_balance: number;
  total_profit: number;
  total_balance_usdt: number;
  total_profit_usdt: number;
  bots: IBOTS[];
}

export interface IBOTS {
  bot_name: string;
  bot_id: string;
  total_investment: number;
  current_value: number;
  daily_pnl: number;
  total_profit: number;
}

export interface ITRADEBOTS {
  bot_id: string;
  name: string;
  subscriber: number;
  total_profits: number;
  apy: number;
  runtime: number;
  tvl: number;
  operated_in: string;
}
