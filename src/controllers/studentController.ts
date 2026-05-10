import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
import { Student } from "../models/student";

export const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ message: "Student created", data: student });
  } catch (error) {
    next(error as Error);
  }
};

export const getStudents = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const students = await Student.find().lean();
    res.status(200).json({ data: students });
  } catch (error) {
    next(error as Error);
  }
};

export const updateStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id, ...updates } = req.body as { id?: string };

    if (!id || !Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Invalid or missing student id" });
      return;
    }

    const updated = await Student.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      res.status(400).json({ message: "Student id does not exist" });
      return;
    }

    res.status(200).json({ message: "Student updated", data: updated });
  } catch (error) {
    next(error as Error);
  }
};

export const getStudentById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    if (!Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Invalid student id" });
      return;
    }

    const student = await Student.findById(id).lean();

    if (!student) {
      res.status(400).json({ message: "Student id does not exist" });
      return;
    }

    res.status(200).json({ data: student });
  } catch (error) {
    next(error as Error);
  }
};
