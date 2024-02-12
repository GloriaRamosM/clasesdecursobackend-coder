import express from "express";

const app = express();

const port = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => console.log("Servidor corriendo en el puerto" + port));
