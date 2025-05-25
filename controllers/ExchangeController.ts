//////////////////////////////////////////////////
//     Created: Luiz Henrique
// Description: consumes routes from frankfurterAPI
//////////////////////////////////////////////////

import { Exchange } from '@prisma/client';
import express, {Request, Response} from 'express';
import { getAll } from '../services/ExchangeService';
import { ExchangeRatesResponse } from '../models/ExchangeRates';

export const getAllByExchange = async (req: Request, res: Response) : Promise<void> => {
    try {
        const exchange = req.params.exchange as Exchange;

        if (!Object.values(Exchange).includes(exchange)){
            res.status(400).json('Parameter exchange is invalid');
            return;
        }
        const response = await getAll(exchange);
        res.status(200).json(response);
    } catch (error:any) {
        res.status(400).json({error: error.message});
    }   
}

