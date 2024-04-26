import express from "express";
import { Command } from "commander";

const app = express();
// inicializar commander

const program = new Command();

program
  .option("-d", "Modo de desarrollo", false)
  .option("-p,  --port", "Puerto del servidor");

program.parse(process.argv);

app.get("/", (req, res) => {
  res.send("Inicio");
});

const port = 3000;
//listeners
// app.listen(port, () => {
//   console.log(`Server on port ${port}`);
// });

//process
// console.log("Opciones:", program.opts());
// console.log("Argumentos:", program.args);

console.log(config);
