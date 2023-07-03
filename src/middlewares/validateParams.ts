import { Request, Response, NextFunction } from 'express';
export const validateIdAsParams = (req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>> => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res
      .status(400)
      .json({ message: "Invalid ID, must be a positive integer" });
  }
  res.locals.id = parseInt(req.params.id)
  next();
};
