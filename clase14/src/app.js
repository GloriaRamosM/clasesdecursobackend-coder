import express from "express";
import mongoose from "mongoose";
import studentsRouter from "./routes/studentsRouter.js";
import dotenv from "dotenv";

// variables de entorno
dotenv.config();
const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => console.log("Server running in ", PORT));

console.log("DB_URL:", process.env.DB_URL);
const connection = mongoose.connect(process.env.DB_URL);

app.use(express.json());
app.use(studentsRouter);
