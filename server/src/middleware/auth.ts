import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
  username: string;
}

export const authenticateToken = (
  req: Request | any,
  res: Response | any,
  next: NextFunction | any
) => {
  const secretKey = process.env.JWT_SECRET_KEY || "";
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  try {
    const decoded = jwt.verify(token, secretKey) as JwtPayload;
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Authentication failed" });
  }
};

export const authOptional = (req: Request | any, next: NextFunction | any) => {
  const secretKey = process.env.JWT_SECRET_KEY || "";
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return next();
  }

  try {
    const decoded = jwt.verify(token, secretKey) as JwtPayload;
    req.user = decoded;
  } catch (error) {
    return next();
  }

  next();
};

export default authenticateToken;
