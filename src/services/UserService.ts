import { UserRepository } from "../repositories/UserRepository";
import { User } from "../entities/UserEntity";


export class UserServices{
    public constructor (readonly userRepository: UserRepository){

    }  

    public async createUser(nome: string, email: string): Promise<User>{
        try {
            const existingEmail = await this.userRepository.findByEmail(email)

            if(existingEmail){
                throw new Error("User with this email already exists");
            }

            const newUser = new User;
            newUser.email = email;
            newUser.nome = nome;
            newUser.tasks = [];

            console.log('Usuário salvo:', newUser);
            return await this.userRepository.save(newUser);

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}