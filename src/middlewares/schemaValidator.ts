import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';

export const schemaValidator = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>> => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errorMessages = error.details.map((detail) => detail.message);
      return res.status(422).json({ messages: errorMessages });
    }

    next();
  };
};