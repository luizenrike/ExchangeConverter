import express, {Request, Response} from 'express'
import { GetAllUsers, GetUser, AddUser, UpdateUser, DeleteUser } from '../services/UserService'
import { UserDTO } from '../models/DTOs/UserDTO';

export const GetAll = (req: Request, res: Response) : void => {
    const result = GetAllUsers;
    res.status(200).json(result);
}

export const GetUserById = (req: Request, res:Response) : void => {
    const result = GetUser(parseInt(req.params.id));

    if (result)
        res.status(200).json(result);
    else 
        res.status(404).json({"message" : "user not found"});
}

export const Create = (req: Request, res: Response) : void => {
    const userDTO : UserDTO = req.body;
    const result = AddUser(userDTO);

    if (result.success)
        res.status(201).json(userDTO);
    else 
        res.status(400).json(result);
}

export const Update = (req: Request, res: Response) : void => {
    const id = parseInt(req.params.id);
    const userDTO : UserDTO = req.body;
    const result = UpdateUser(id, userDTO);

    if (result.success)
        res.status(204).json(result);
    else 
        res.status(400).json(result);
}

export const Delete = (req: Request, res: Response) : void => {
    const id = parseInt(req.params.id);;
    const result = DeleteUser(id);

    if (result.success)
        res.status(204).json(result);
    else 
        res.status(400).json(result);
}