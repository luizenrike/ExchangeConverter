import { User } from "../models/User";
import { Exchange } from "../models/Exchange";
import { UserDTO } from "../models/DTOs/UserDTO";
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();
let Users : User[] = [];

export const GetAllUsers  = async () :  Promise<User[] | any> => {
    const usersDB = await prisma.user.findMany();
    return usersDB;
}

export const GetUser = async (id: number) : Promise<User> => {
    const user = await prisma.user.findUnique({where: { id }});
    if (!user)
        throw new Error('User not found');
    else 
        return user;
}

export const AddUser = async (user: UserDTO) : Promise<{message: string, User: User}> =>  {
    try {
        const newUser = await prisma.user.create({
            data:{
                name        : user.name,
                email       : user.email,
                age         : user.age,
                nacionality : user.nacionality,
                exchange    : user.exchange
            }
        });
        return {message: "User created successfully", User: newUser};
    } catch (error) {
        throw new Error('An error occurred while creating the user');
    }
}  

export const UpdateUser = async (id: number, updateUser: Partial<UserDTO>) : Promise<{message: string}>  => {
    try {
        await prisma.user.update({where : {id}, data: updateUser});
        return {message: 'user updated successfully'};
    } catch (error) {
        throw new Error('An error occurred while update the user')
    }
}

export const DeleteUser = async (id: number) : Promise<{message: string}> => {
    try {
        await prisma.user.delete({where : {id}});
        return {message: 'User deleted successfully'};
    } catch (error) {
        throw new Error('An error occurred while delete the user');
    }
}