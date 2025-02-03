import jwt from "jsonwebtoken";
export const authenticateToken = (req, res, next) => {
    const secretKey = process.env.JWT_SECRET_KEY || "";
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        return res.status(401).json({ message: "Authentication failed" });
    }
    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: "Authentication failed" });
    }
};
export const authOptional = (req, next) => {
    const secretKey = process.env.JWT_SECRET_KEY || "";
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        return next();
    }
    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
    }
    catch (error) {
        return next();
    }
    next();
};
export default authenticateToken;
