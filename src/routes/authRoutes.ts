import { Router } from "express";
import { login, signup } from "../controllers/authController";

const router = Router();

/**
 * @openapi
 * /auth/signup:
 *   post:
 *     summary: Sign up a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SignupInput'
 *     responses:
 *       201:
 *         description: User created
 */
router.post("/signup", signup);

/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: Login user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginInput'
 *     responses:
 *       200:
 *         description: Login success
 */
router.post("/login", login);

export default router;
