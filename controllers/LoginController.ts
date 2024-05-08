import { Request, Response } from 'express';
import { findUserById } from '../repository/UserRepository.js';
import { encryptStr } from '../utils/StringUtils.js';
import { createJwt } from '../utils/Jwt.js';
import type { User } from '../model/User.js';

async function login(req: Request, res: Response) {
  const { userId, password } = req.body;

  const user = await findUserById(userId);

  if (isInvalidUser(user, password)) {
    res.status(400).json({
      msg: 'id or password is wrong',
    });
  }

  res.json({
    msg: 'ok',
    jwt: await createJwt(userId),
  });
}

function isInvalidUser(user: User | null, password: string): boolean {
  const encrypted = encryptStr(password);

  return !user || user.password === encrypted;
}

export { login };
