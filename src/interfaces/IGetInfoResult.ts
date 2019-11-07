export interface IGetInfoResult {
  server_time: number;
  pairs: {
    [pair: string]: {
      decimal_places: number;
      min_price: number;
      max_price: number;
      min_amount: number;
      hidden: number;
      fee: number;
      amount_decimal_places: number;
      quoted_currency: string;
      base_currency: string;
    };
  };
}
