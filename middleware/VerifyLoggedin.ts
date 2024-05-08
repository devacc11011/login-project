import { Response } from 'express';
import { getJwtFromHeader, validateAndParseJwt } from '../utils/Jwt.js';
import UserRequest from './requests/UserRequest.js';
import { findUserById } from '../repository/UserRepository.js';
import { UserNotFoundError } from '../errors/AuthenticationError.js';

async function verifyJwt(req: UserRequest, res: Response) {
  const jwt = getJwtFromHeader(req.headers.authorization);

  const {
    payload: { userId },
  } = await validateAndParseJwt(jwt);

  const findUser = await findUserById(userId);
  if (!findUser) throw new UserNotFoundError('user not found');

  req.user = findUser;
}

export { verifyJwt };
