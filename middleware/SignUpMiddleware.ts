import { NextFunction, Response } from 'express';
import { InvalidSignInfo } from '../errors/SignUpError.js';
import { anyBlank } from '../utils/StringUtils.js';
import UserRequest from './requests/UserRequest.js';
import { findUserById } from '../repository/UserRepository.js';
import { Role } from '@prisma/client';

async function validateSignUp(req: UserRequest, res: Response, next: NextFunction) {
  const { userId, userName, password } = req.body;

  if (anyBlank(userId, userName, password)) {
    throw new InvalidSignInfo('signup  info is missing');
  }
  if (await isDuplicateId(userId)) {
    throw new InvalidSignInfo('duplicated Id');
  }

  req.user = { id: userId, name: userName, password, role: Role.USER };
  next();
}

async function isDuplicateId(userId: string) {
  return !!(await findUserById(userId));
}

export { validateSignUp };
