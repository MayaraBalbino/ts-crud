import express from 'express';
import { AppDataSource } from './config/AppDataSource';

AppDataSource.initialize().then(() => {
    const app = express();
    app.use(express.json());

    app.use((req, res) => {
        res.json({ message: 'servidor rodando' });
    });

    app.listen(3000, () => {
        console.log('servidor rodando na porta 3000');
    });
});
