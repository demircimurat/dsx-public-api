import { IFunds } from "./IFunds";

export interface ICreateOrderResult {
  received: number;
  remains: number;
  funds: IFunds;
  orderId: number;
}
