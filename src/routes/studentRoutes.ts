import { Router } from "express";
import {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
} from "../controllers/studentController";

const router = Router();

/**
 * @openapi
 * /students:
 *   post:
 *     summary: Create a student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentInput'
 *     responses:
 *       201:
 *         description: Student created
 */
router.post("/", createStudent);

/**
 * @openapi
 * /students:
 *   get:
 *     summary: Get all students
 *     responses:
 *       200:
 *         description: Students list
 */
router.get("/", getStudents);

/**
 * @openapi
 * /students:
 *   patch:
 *     summary: Update a student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentUpdateInput'
 *     responses:
 *       200:
 *         description: Student updated
 */
router.patch("/", updateStudent);

/**
 * @openapi
 * /students/{id}:
 *   get:
 *     summary: Get student by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Student data
 *       400:
 *         description: Invalid id
 */
router.get("/:id", getStudentById);

export default router;
