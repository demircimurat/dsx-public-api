import { IDeal } from "./IDeal";
import { OrderType } from "../DSXPublicAPIClient";
import { OrderStatus } from "../OrderStatus";

export interface IOrderStatusResult {
  pair: string;
  type: "buy" | "sell";
  remainingVolume: number;
  volume: number;
  rate: number;
  timestampCreated: number;
  status: OrderStatus;
  orderType: OrderType;
  deals: IDeal[];
}
