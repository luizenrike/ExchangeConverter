import { Exchange } from "../Exchange";

export interface  UserDTO {
    name        : string;
    age         : number;
    nacionality : string;
    exchange    : Exchange;
}