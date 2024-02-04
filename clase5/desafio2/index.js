import moment from "moment/moment.js";

const date = moment().format("YYYY - MM - DD");

const fechaDeNacimiento = moment("1995-07-25", "YYYY-MM-DD");

if (fechaDeNacimiento.isValid()) {
  console.log("La fecha de nacimiento es válida.");
} else {
  console.log("La fecha de nacimiento no es válida.");
}

const diferencia = moment().diff(fechaDeNacimiento, "days");
//const anos = moment.duration(diferencia).years();

console.log(diferencia);

// date.diff();

console.log(date);
