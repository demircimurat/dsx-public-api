import { TransactionStatus } from "../TransactionStatus";

export interface ITransactionHistoryResult {
  [id: number]: {
    id: number;
    timestamp: number;
    type: "Withdraw" | "Deposit";
    amount: number;
    currency: string;
    confirmationsCount: number;
    address: string;
    status: TransactionStatus;
    commission: number;
  };
}
