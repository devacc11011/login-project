import { NextFunction, Request, Response, type ErrorRequestHandler } from 'express';
import {
  AuthenticationError,
  BadCredentialError,
  UserNotFoundError,
} from '../errors/AuthenticationError.js';

const commonHandleError: ErrorRequestHandler = (
  err: Error,
  rep: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.message);

  res.status(500).json({
    msg: ' unknown error',
  });
};
const authHandlError: ErrorRequestHandler = (
  err: Error,
  rep: Request,
  res: Response,
  next: NextFunction
) => {
  if (isNotAuthencitationError(err)) {
    next(err);
    return;
  }

  let msg = 'authentication failed';
  if (err instanceof UserNotFoundError) {
    msg = 'userId or password is wrong';
  }
  if (err instanceof BadCredentialError) {
    msg = 'userId or password is wrong';
  }
  res.status(400).json({
    msg,
  });
};

function isNotAuthencitationError(err: Error) {
  return !(err instanceof AuthenticationError);
}
export { commonHandleError, authHandlError };
