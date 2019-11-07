export interface IFunds {
  [currency: string]: {
    total: number;
    available: number;
  };
}
