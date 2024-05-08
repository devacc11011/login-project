import { SignJWT, jwtVerify } from 'jose';
import { isBlank } from './StringUtils.js';
import type { User } from '../model/User.js';
import { JWT_CONFIG } from '../config/AppConfig.js';
import { BadCredentialError } from '../errors/AuthenticationError.js';

const secret = new TextEncoder().encode(process.env.JWT_SECRET);
const JWT_TYPE = process.env.JWT_TYPE;

interface JWTPayload {
  userId: string;
}

async function createJwt(user: User) {
  return await new SignJWT({ userId: user.id })
    .setProtectedHeader({ alg: JWT_CONFIG.ALG })
    .setIssuedAt()
    .setExpirationTime(JWT_CONFIG.EXP_TIME)
    .sign(secret);
}

async function validateAndParseJwt(jwt: string) {
  return await jwtVerify<JWTPayload>(jwt, secret);
}

function getJwtFromHeader(authHeader: string | null | undefined) {
  if (isBlank(authHeader)) throw new BadCredentialError('jwt header is missing');

  return authHeader!.substring(getJwtTypeLength(JWT_TYPE!));
}

function getJwtTypeLength(jwtType: string): number {
  return jwtType!.length + 1;
}

export { createJwt, validateAndParseJwt, getJwtFromHeader };
