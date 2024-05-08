import { NextFunction, Request, Response } from 'express';
import { encryptStr, isBlank } from '../utils/StringUtils.js';

function validateLogin(req: Request, res: Response, next: NextFunction) {
  const { userId, password } = req.body;
  if (isBlank(userId) || isBlank(password)) throw new Error();
  next();
}

function encryptPassword(req: Request, res: Response, next: NextFunction) {
  req.body.password = encryptStr(req.body.password);
  next();
}

export { validateLogin, encryptPassword };
