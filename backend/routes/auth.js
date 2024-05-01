import express from 'express';
const router = express.Router();
import jwt from "jsonwebtoken";

router.get("/", async (req, res) => {
    try {
        const token = jwt.sign(
            {
                username: 'username',
                password: 'password',
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h",
            }
        );

        // Send the token as a JSON response
        res.json({ token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'An error occurred during login' });
    }
});

export default router;
