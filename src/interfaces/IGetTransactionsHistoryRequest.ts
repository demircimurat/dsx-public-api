import { SortOrder } from "../DSXPublicAPIClient";

export interface IGetTransactionsHistoryRequest {
  count?: number;
  fromId?: number;
  endId?: number;
  order?: SortOrder;
  since?: number;
  end?: number;
  type?: string;
  status?: number;
  currency?: string;
}
