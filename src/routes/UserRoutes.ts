import { Router, Request, Response, NextFunction } from 'express';
import { UserServices } from '../services/UserService';

export class UserRouter {
    constructor(private readonly userService: UserServices) {}

    public getRouter(): Router {
        const router = Router();
        router.post(
            '/users',
            async (req: Request, res: Response, next: NextFunction): Promise<any> =>{
                try {
                    const { nome, email } = req.body;

                    if (
                        !nome ||
                        typeof nome !== 'string' ||
                        nome.trim().length < 2
                    ) {
                        return res.status(400).json({
                            error: 'Nome obrigátorio: no mínimo dois caracteres',
                        });
                    }

                    if (!email || typeof email !== 'string') {
                        return res.status(400).json({
                            error: 'Email obrigatorio',
                        });
                    }

                    const user = await this.userService.createUser(nome, email);
                    console.log("Usuario: ", user)
                    return res.status(200).json(user);
                } catch (error : any) {
                    next(error);
                }
            }
        );
        return router;
    }
}
