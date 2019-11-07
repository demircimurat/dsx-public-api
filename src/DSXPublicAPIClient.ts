import ccxt from "ccxt";
import {
  IGetInfoResult,
  IGetTickerResult,
  IGetTradesResult,
  ITransactionHistoryResult,
  IResponse,
  IGetTransactionsHistoryRequest,
  IGetTradesHistoryRequest,
  ITradeHistoryResult,
  IGetOrdersHistoryRequest,
  IGetOrdersResult,
  IGetActiveOrdersRequest,
  ICancelOrderRequest,
  ICancelOrderResult,
  IOrderStatusRequest,
  IOrderStatusResult,
  ICreateOrderRequest,
  ICreateOrderResult,
  IAccountInformationResult,
  IVolumeResult,
  IFeesResult
} from "./interfaces";

export type OrderType = "limit" | "market" | "fill-or-kill";
export type SortOrder = "asc" | "desc";

export class DSXPublicAPIClient {
  private dsx;

  constructor(apiKey: string, secret: string, apiHost: string = "https://dsx.uk") {
    this.dsx = new ccxt.dsx({
      apiKey,
      secret,
      //@ts-ignore
      urls: {
        logo: "",
        api: {
          public: `${apiHost}/mapi`,
          private: `${apiHost}/tapi`,
          dwapi: `${apiHost}/dwapi`
        }
      }
    });
    this.dsx.nonce = () => Math.floor(Date.now());
  }

  async depthPair(args) {
    return this.dsx.publicGetDepthPair(args);
  }

  async getInfo(): Promise<IGetInfoResult> {
    return this.dsx.publicGetInfo();
  }

  async getTicker(pair: string): Promise<IGetTickerResult> {
    return this.dsx.publicGetTickerPair({
      pair
    });
  }

  async getTrades(pair: string, limit: number = 150): Promise<IGetTradesResult> {
    return this.dsx.publicGetTradesPair({
      pair,
      limit
    });
  }

  async getTransactionsHistory(args: IGetTransactionsHistoryRequest): Promise<IResponse<ITransactionHistoryResult>> {
    return this.dsx.privatePostHistoryTransactions(args);
  }

  async getTradesHistory(args: IGetTradesHistoryRequest): Promise<IResponse<ITradeHistoryResult>> {
    return this.dsx.privatePostHistoryTrades(args);
  }

  async getOrdersHistory(args: IGetOrdersHistoryRequest): Promise<IResponse<IGetOrdersResult>> {
    return this.dsx.privatePostHistoryOrders(args);
  }

  async getActiveOrders(args: IGetActiveOrdersRequest): Promise<IResponse<IGetOrdersResult>> {
    return this.dsx.privatePostOrders(args);
  }

  async cancelOrder(args: ICancelOrderRequest): Promise<IResponse<ICancelOrderResult>> {
    return this.dsx.privatePostOrderCancel(args);
  }

  // async cancelAllOrders(): Promise<IResponse<ICancelAllOrdersResult>> {
  //   return this.dsx.privatePostOrderCancelAll();
  // }

  async getOrderStatus(args: IOrderStatusRequest): Promise<IResponse<IOrderStatusResult>> {
    return this.dsx.privatePostOrderStatus(args);
  }

  async createOrder(args: ICreateOrderRequest): Promise<IResponse<ICreateOrderResult>> {
    return this.dsx.privatePostOrderNew(args);
  }

  async accountInformation(): Promise<IResponse<IAccountInformationResult>> {
    return this.dsx.privatePostInfoAccount();
  }

  async volume(): Promise<IResponse<IVolumeResult>> {
    return this.dsx.privatePostVolume();
  }

  async fees(): Promise<IResponse<IFeesResult>> {
    return this.dsx.privatePostFees();
  }
}
