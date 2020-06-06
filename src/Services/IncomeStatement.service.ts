import { DynamicObject, iexApiRequest, KVP } from "./iexcloud.service";

export const incomeStatement = async (
  symbol: string,
  period: string = "quarter",
  lastN: number = 1
): Promise<IncomeStatement[]> => {
  const { income } = await iexApiRequest(`/stock/${symbol}/income`, {
    last: lastN,
    period,
  });

  return income.map(
    (o: KVP) =>
      new IncomeStatement({
        ...o,
        symbol,
      })
  );
};

export interface IEXIncomeStatement {
  symbol: string;
  reportDate: string;
  totalRevenue: number;
  costOfRevenue: number;
  grossProfit: number;
  researchAndDevelopment: number;
  sellingGeneralAndAdmin: number;
  operatingExpense: number;
  operatingIncome: number;
  otherIncomeExpenseNet: number;
  ebit: number;
  interestIncome: number;
  pretaxIncome: number;
  incomeTax: number;
  minorityInterest: number;
  netIncome: number;
  netIncomeBasic: number;
}

export class IncomeStatement extends DynamicObject {
  public symbol: string = "";
  public reportDate: string = "";
  public totalRevenue: number = 0;
  public costOfRevenue: number = 0;
  public grossProfit: number = 0;
  public researchAndDevelopment: number = 0;
  public sellingGeneralAndAdmin: number = 0;
  public operatingExpense: number = 0;
  public operatingIncome: number = 0;
  public otherIncomeExpenseNet: number = 0;
  public ebit: number = 0;
  public interestIncome: number = 0;
  public pretaxIncome: number = 0;
  public incomeTax: number = 0;
  public minorityInterest: number = 0;
  public netIncome: number = 0;
  public netIncomeBasic: number = 0;
}
