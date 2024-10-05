import { jwt } from '../imports';
import { Request, Response, NextFunction } from 'express';

interface JwtPayload {
    userId: number; // Adjust based on your JWT payload structure
}

const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization?.split(" ")[1];
    const secret = process.env.JWT_SECRET;

    if (!token) {
        res.status(401).json({ message: "Unauthorized user" });
        return
    }

    if (!secret) {
        res.status(400).json({ message: "JWT secret not given" });
        return;
    }

    try {
        const result = jwt.verify(token, secret) as JwtPayload;
        req.userId = result.userId; // Assign userId to the request object
        next();
    } catch (error) {
        console.error("JWT verification error:", error);
        res.status(403).json({ message: "Invalid token" });
        return;
    }
}

export default authMiddleware;
