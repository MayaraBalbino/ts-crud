import { Request, Response, NextFunction } from 'express';

export const errorHandlerMiddleware = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const statusCode = err.statusCode || 500;

    const message = err.message || 'Internal server error';

    res.status(statusCode).json({error: {
        message,
        status: statusCode
    }})
};
