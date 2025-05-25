export interface ExchangeRatesResponse {
  amount: number;
  base  : string;
  date  : string;
  rates : {
    [currency : string] : number;
  };
}