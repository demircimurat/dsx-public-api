import { ICommission } from "./ICommission";

export interface IFeesResult {
  progressiveCommissions: {
    commissions: ICommission[];
    indexOfCurrentCommission: number;
    currency: string;
  };
}
