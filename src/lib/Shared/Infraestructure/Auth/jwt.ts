import jwt, { SignOptions } from "jsonwebtoken";

export type AuthClaims = { sub: string; roles?: string[] };

const ACCESS_SECRET  = process.env.JWT_SECRET!;
const REFRESH_SECRET = process.env.REFRESH_SECRET!;

export function signAccessToken(payload: AuthClaims, opts: SignOptions = {}) {
    
  const expiresIn: SignOptions["expiresIn"] =
    (process.env.JWT_EXPIRES_IN as SignOptions["expiresIn"]) ?? "15m";

  return jwt.sign(payload, ACCESS_SECRET, { expiresIn, ...opts });
}

export function verifyAccessToken(token: string): AuthClaims {
  return jwt.verify(token, ACCESS_SECRET) as AuthClaims;
}

export function signRefreshToken(payload: AuthClaims, opts: SignOptions = {}) {
  const expiresIn: SignOptions["expiresIn"] =
    (process.env.REFRESH_EXPIRES_IN as SignOptions["expiresIn"]) ?? "7d";

  return jwt.sign(payload, REFRESH_SECRET, { expiresIn, ...opts });
}

export function verifyRefreshToken(token: string): AuthClaims {
  return jwt.verify(token, REFRESH_SECRET) as AuthClaims;
}
