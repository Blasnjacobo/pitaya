import jwt from "jsonwebtoken";

function authenticateToken(req, res, next) {
  const secretKey = process.env.JWT_SECRET;
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authentication token is required" });
  }
  const token = authHeader.substring(7);
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = decoded;
    next();
  });
}

export default authenticateToken;
