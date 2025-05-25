//////////////////////////////////////////////////
//     Created: Luiz Henrique
// Description: consumes routes from frankfurterAPI
//////////////////////////////////////////////////

import axios from "axios";
import { ExchangeRatesResponse } from "../models/ExchangeRates";
import { Exchange } from "@prisma/client";

export const getAll = async (Exchange : Exchange) : Promise<ExchangeRatesResponse> => {
    try {
       const response = await axios.get<ExchangeRatesResponse>(`https://api.frankfurter.dev/v1/latest?base=${Exchange}`);
       return response.data;
    } catch (error) {
       throw new Error('An error occurred while fetching exchange rates');
    }
}

