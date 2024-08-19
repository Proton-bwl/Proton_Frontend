export interface IPnlChart {
  bot_name: string;
  bot_id: string;
  timeframe: number;
  Available: number;
  data: IChartData[];
  daily_PnL: number;
  detailInformation: IDetail;
}

export interface IChartData {
  createdAt: string;
  pnlRate: number;
}

export interface IDetail {
  apy: number;
  mdd: number;
  winRate: number;
}
