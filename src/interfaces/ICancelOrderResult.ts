import { IFunds } from "./IFunds";

export interface ICancelOrderResult {
  funds: IFunds;
  orderId: number;
}
