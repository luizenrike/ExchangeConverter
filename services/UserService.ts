import { User } from "../models/User";
import { Exchange } from "../models/Exchange";
import { UserDTO } from "../models/DTOs/UserDTO";

let Users : User[] = [];

export const GetAllUsers  = () :  User[]=> {
    return Users;
}

export const GetUser = (id: number) : User | undefined => {
    const user = Users.find(u => u.id === id);
    
    return user;
}

export const AddUser = (user: UserDTO) : {success: boolean, message: string} => {
    try {
        const newUser : User = {
            id          : Users.length + 1,
            name        : user.name,
            age         : user.age,
            nacionality : user.nacionality,
            exchange    : user.exchange
        };

        Users.push(newUser);
        return {success: true, message: "user created"};
    } catch (error) {
        return {success: false, message: "fail"}; 
    }
}  

export const UpdateUser = (id: number, updateUser: UserDTO) : {success: boolean, message: string} => {
    try {
        const user = Users.find(u => u.id === id);

        if (user){
            user.name        = updateUser.name;
            user.nacionality = updateUser.nacionality;
            user.age         = updateUser.age;
            user.exchange    = updateUser.exchange;
            return {success: true, message: "user updated"};
        }else{
            return {success: false, message: "user not found"}
        }
    } catch (error) {
        return {success: false, message: "fail update user"};
    }
}

export const DeleteUser = (id: number) : {success: boolean, message: string} => {
    try {
        const userIndex = Users.findIndex(u => u.id === id);

        if (userIndex !== -1){
            Users.splice(userIndex, 1);
            return {success: true, message: "user deleted"};
        }else
            return {success: false, message: "user not found"}
    } catch (error) {
        return {success: false, message: "fail update user"};
    }
}