import { Exchange } from '@prisma/client';

export interface User {
    id          : number;
    name        : string;
    email       : string;
    age         : number;
    nacionality : string;
    exchange    : Exchange;
    createdAt   : Date;
};