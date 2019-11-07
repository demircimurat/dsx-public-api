import { SortOrder } from "../DSXPublicAPIClient";

export interface IGetTradesHistoryRequest {
  count?: number;
  fromId?: number;
  endId?: number;
  order?: SortOrder;
  since?: number;
  end?: number;
  pair?: string;
}
