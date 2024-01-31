/* setTimeout Sintaxis:

setTimeout(funcionAEjecutar, tiempoDeDemoraEnMilisegundos)*/

//const hora = new Date().toLocaleTimeString();
// const fecha = new Date().toLocaleDateString();

const fs = require("fs");

const PATH = "./ejemplo.txt";
const HORA = new Date().toLocaleTimeString();

const asyncTask = async () => {
  await fs.promises.writeFile(PATH, HORA);
  console.log("Mensaje escrito");

  let result = await fs.promises.readFile(PATH, "utf-8");
  console.log(result);

  await fs.promises.appendFile(PATH, "\n Segundo mensaje");
  result = await fs.promises.readFile(PATH, "utf-8");
  console.log(result);
};

asyncTask();
