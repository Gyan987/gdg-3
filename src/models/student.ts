import { Schema, model, Document } from "mongoose";

export interface StudentDocument extends Document {
  name: string;
  email?: string;
  age?: number;
  course?: string;
}

const studentSchema = new Schema<StudentDocument>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    age: { type: Number, min: 0 },
    course: { type: String, trim: true },
  },
  { timestamps: true }
);

export const Student = model<StudentDocument>("Student", studentSchema);
