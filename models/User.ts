import { Exchange } from "./Exchange";

export interface User {
    id          : number;
    name        : string;
    age         : number;
    nacionality : string;
    exchange    : Exchange;
};