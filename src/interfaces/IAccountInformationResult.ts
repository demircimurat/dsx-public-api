import { IFunds } from "./IFunds";

export interface IAccountInformationResult {
  funds: IFunds;
  rights: {
    info: number;
    trade: number;
  };
  transactionCount: number;
  openOrders: number;
  serverTime: number;
}
