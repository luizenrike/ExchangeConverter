import express, {Request, Response} from 'express'
import { GetAllUsers, GetUser, AddUser, UpdateUser, DeleteUser } from '../services/UserService'
import { UserDTO } from '../models/DTOs/UserDTO';

export const GetAll = async (req: Request, res: Response) : Promise<void> => {
    const result = await GetAllUsers();
    res.status(200).json(result);
}

export const GetUserById = async (req: Request, res:Response) : Promise<void> => {
    try {
        const result = await GetUser(parseInt(req.params.id));
        res.status(200).json(result);  
    } catch (error:any) {
        res.status(404).json({error: error.message})
    }
}

export const Create = async (req: Request, res: Response) : Promise<void> => {
    try {
        const userDTO : UserDTO = req.body;
        const result = await AddUser(userDTO);  
        res.status(201).json({ message: result.message, user: result.User });
    } catch (error: any) {
        res.status(400).json({ error: error.message }); 
    }     
}

export const Update = async (req: Request, res: Response) : Promise<void> => {
    try {
        const id = parseInt(req.params.id);
        const userDTO : UserDTO = req.body;
        const result = await UpdateUser(id, userDTO);
        res.status(200).json({message: result.message});
    } catch (error:any) {
        res.status(400).json({error: error.message});
    }
}

export const Delete = async (req: Request, res: Response) : Promise<void> => {
    try {
        const id = parseInt(req.params.id);
        const result = await DeleteUser(id);
        res.status(200).json({message: result.message});
    } catch (error:any) {
        res.status(400).json({error: error.message});
    }
}