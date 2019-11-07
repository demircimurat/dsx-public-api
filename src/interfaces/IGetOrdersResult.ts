import { OrderType } from "../DSXPublicAPIClient";

export interface IGetOrdersResult {
  [id: number]: {
    pair: string;
    type: "buy" | "sell";
    remainingVolume: number;
    volume: number;
    rate: number;
    timestampCreated: number;
    status: number;
    orderType: OrderType;
  };
}
