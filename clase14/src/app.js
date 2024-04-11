import express from "express";
import mongoose from "mongoose";
import studentsRouter from "./routes/studentsRouter.js";
import dotenv from "dotenv";
import session from "express-session";

// variables de entorno
dotenv.config();
const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => console.log("Server running in ", PORT));

console.log("DB_URL:", process.env.DB_URL);
const connect = mongoose.connect(process.env.DB_URL);

app.use(express.json());
app.use(studentsRouter);

app.use(
  session({
    secret: "Secreto",
    resave: true,
    saveUninitialized: true,
  })
);
