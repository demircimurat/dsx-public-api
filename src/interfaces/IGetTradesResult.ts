export interface IGetTradesResult {
  [pair: string]: {
    amount: number;
    price: number;
    timestamp: number;
    tid: number;
    type: string;
  }[];
}
