import { Router } from "express";
import studentRoutes from "./studentRoutes";
import authRoutes from "./authRoutes";

const router = Router();

router.use("/students", studentRoutes);
router.use("/auth", authRoutes);

export default router;
