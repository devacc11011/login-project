import { Response } from 'express';
import UserRequest from '../middleware/requests/UserRequest.js';
import { saveUser } from '../repository/UserRepository.js';
import { createJwt } from '../utils/Jwt.js';

async function signUp(req: UserRequest, res: Response) {
  const user = req.user;

  if (!user) throw new Error('sign up info missing');

  saveUser(user);

  res.json({
    msg: 'ok',
    jwt: await createJwt(user),
  });
}

export { signUp };
