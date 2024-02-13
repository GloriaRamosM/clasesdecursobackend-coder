import express from "express";

const app = express();

const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => console.log("Servidor corriendo en el puerto" + port));
