import express from 'express';
import { AppDataSource } from './config/AppDataSource';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware';
import { UserRouter } from './routes/UserRoutes';
import { UserServices } from './services/UserService';
import { UserRepository } from './repositories/UserRepository';
import { User } from './entities/UserEntity'

AppDataSource.initialize().then(() => {
    const app = express();
    app.use(express.json());

    const userRepository = new UserRepository(AppDataSource.getRepository(User));
    const userService = new UserServices(userRepository);
    const userRouter = new UserRouter(userService);

    app.use(userRouter.getRouter());

    app.get('/', (req, res) => {
        res.json({ message: 'servidor rodando' });
    });

    app.use(errorHandlerMiddleware);

    app.listen(3000, () => {
        console.log('servidor rodando na porta 3000');
    });
}).catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
});
