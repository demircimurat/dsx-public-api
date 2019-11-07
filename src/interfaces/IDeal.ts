export interface IDeal {
  pair: string;
  type: "buy" | "sell";
  volume: number;
  rate: number;
  orderId: number;
  timestamp: number;
  commission: number;
  commissionCurrency: string;
}
