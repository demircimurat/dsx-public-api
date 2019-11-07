export interface IGetTickerResult {
  [pair: string]: {
    high: number;
    low: number;
    last: number;
    buy: number;
    sell: number;
    updated: number;
    avg: number;
    vol: number;
    vol_cur: number;
  };
}
