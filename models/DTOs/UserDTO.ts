import { Exchange } from "@prisma/client";

export interface  UserDTO {
    name        : string;
    email       : string;
    age         : number;
    nacionality : string;
    exchange    : Exchange;
}