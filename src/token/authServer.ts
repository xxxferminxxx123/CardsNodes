import jwt, { SignOptions } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

const SECRET_KEY =  "221ce4f433152e10922a4771bea3b00e5abce3585a949892e66108ebb4bbbe1300ae09d3a2f6bafd650a80645b4ba4ec8904f6e2a7eb429d59f71c017e790c7e";

interface UserPayload {
    username: string;
    password: string;
}

export function generateToken(user: UserPayload) {
    const options: SignOptions = { expiresIn: "15s" };
    return jwt.sign(user, SECRET_KEY, options);
}


export function create(req: Request, res: Response, next: NextFunction) {
    const autHeader = req.headers['authorization'];
    const token = autHeader && autHeader.split(' ')[1];
    if(token==null) return res.sendStatus(401);

    jwt.verify(token.charAt, )
}