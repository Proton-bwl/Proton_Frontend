export interface IPnlChart {
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

interface IDetail {
  apy: number;
  mdd: number;
  tvl: number;
  winRate: number;
}
