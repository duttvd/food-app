// Declare global types for Express
declare global {
    namespace Express {
        interface Request {
            id: string;  // Ensure `id` is of type `string`
        }
    }
}

import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "User not authenticated"
            });
        }
        // Verify the token
        const decode = jwt.verify(token, process.env.SECRET_KEY!) as jwt.JwtPayload;

        // Check if decoding was successful
        if (!decode) {
            return res.status(401).json({
                success: false,
                message: "Invalid token"
            });
        }
        req.id = decode.userId;  // Assign userId to `req.id`
        next();
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};
