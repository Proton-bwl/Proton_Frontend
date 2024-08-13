export interface IPnlChart {
  bot_id: string;
  timeframe: number;
  Available: number;
  data: IChartData[];
}

export interface IChartData {
  createdAt: string;
  pnlRate: number;
}
