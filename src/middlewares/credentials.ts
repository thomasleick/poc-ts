import allowedOrigins from '../configs/allowedOrigins.ts';
import { Request, Response, NextFunction } from 'express';

const credentials = (req: Request, res: Response, next: NextFunction): void => {
    const origin = req.headers.origin as string;
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Credentials', 'true');
    }
    next();
};

export default credentials;