import { OrderType } from "../DSXPublicAPIClient";

export interface ICreateOrderRequest {
  type: "buy" | "sell";
  rate: number;
  volume: number;
  pair: string;
  orderType: OrderType;
}
