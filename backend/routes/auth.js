import express from 'express';
const router = express.Router();
import jwt from "jsonwebtoken";

router.get("/", async (req, res) => {
    try {
        const secretKey = process.env.JWT_SECRET
        const token = jwt.sign(
            {
              user: 'user',
              username: 'username',
              provider: 'provider',
            },
            secretKey,
            {
              expiresIn: "1h",
            }
        )
        // Send the token as a JSON response
        res.json({ token})
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'An error occurred during login' });
    }
});

export default router;
