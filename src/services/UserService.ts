import { UserRepository } from "../repositories/UserRepository";

export class UserServices{
    public constructor (readonly userRepository: UserRepository){

    }  

    public async createUser()
}