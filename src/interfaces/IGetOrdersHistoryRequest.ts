import { SortOrder } from "../DSXPublicAPIClient";

export interface IGetOrdersHistoryRequest {
  count?: number;
  fromId?: number;
  endId?: number;
  order?: SortOrder;
}
