// // ES6

// // Math -- eleva al cuadrado ponele

// arrayDeNumeros = [0, 1, 2, 3, 4, 5, 6];

// let result = arrayDeNumeros.map((numero, indice) => numero ** indice);
// console.log(result);

// //Includes

// arrayDeNombres = ["maria", "pedro", "Jose", "Luciano", "agus"];
// let result2 = arrayDeNombres.includes("Leo");

// console.log(result2);

// //ECMA10

// //FLAT: une los arryas en uno solo cuando existe un array anidado

// arrayAnidado = [0, 2, 3, [0, 1, 2, 3]];

// let result3 = arrayAnidado.flat();

// console.log(result3);

// // TRIM = SACA LOS ESPACIOS AL PRINCIPIO Y AL FINAL, en los string, no recibe parametros

// let string = "Hola clase             ";

// let string2 = "                 hola clase";
// console.log("🚀 ~ string2:", string2);

// string.trim();
// console.log("🚀 ~ string.trim():", string.trim());
// string2.trim();

// //ECMA 8

// //ENTRIES

// let personas = [
//   {
//     id: 1,
//     name: "Leo",
//     mayorDeEdad: true,
//   },
//   {
//     id: 2,
//     name: "Lucia",
//     mayorDeEdad: false,
//   },
// ];
// let entries = personas.map((persona) => Object.entries(persona));
// console.log("🚀 ~ entries:", entries);

// //KEYS
// let keys = personas.map((persona) => Object.keys(persona));
// console.log("🚀 ~ keys:", keys);

// //VALUES
// let values = personas.map((persona) => Object.values(persona));
// console.log("🚀 ~ values:", values);

// Desafio en clase

const productos = [
  {
    manzanas: 3,
    peras: 4,
    carne: 1,
    jugos: 5,
  },
  {
    manzanas: 5,
    sandias: 7,
    huevos: 2,
    jugos: 8,
    panes: 4,
  },
];

// let newArray = [];

// let resultado = productos.forEach((producto) => {
//   const keys = Object.keys(producto);
//   console.log("🚀 ~ resultado ~ keys:", keys);

//   keys.forEach((key) => {
//     if (!newArray.includes(key)) newArray.push(key);
//   });
// });
// console.log("🚀 ~ newArray:", newArray);

// let total = 0;

// productos.forEach((producto) => {
//   const value = Object.values(producto);

//   subtotal = value.reduce((a, b) => a + b, 0);

//   total += subtotal;
// });

// console.log("🚀 ~ total:", total);

// ECMA9

// Spread operator ( ...) spread = desparrapamar

// el spread operator sobre escribe lo que es a la derecha, es mas pesado por decirle asi

// let objeto1 = {
//   propiedad1: "",
//   propiedad2: "H",
//   propiedad3: false,
// };

// let objeto2 = {
//   propiedad1: "holi",
//   propiedad2: "H",
//   propiedad3: true,
// };

// let objetoNuevo = {
//   ...objeto1,
//   name: objeto1.propiedad1,
//   last_name: objeto1.propiedad2,
// };
// console.log("🚀 ~ objetoNuevo:", objetoNuevo);

// // Caso de uso del spread operator -- ES MUY UTIL

// let arrayDeNumeros1 = [0, 1, 2, 3, 4, 5];
// let arrayDeNumeros2 = [0, 1, 2, 3, 4, 5];

// let nuevoArraydeN = [2, 6, 8, ...arrayDeNumeros1, 10, 15, 12];
// console.log("🚀 ~ nuevoArraydeN:", nuevoArraydeN);

// // ESM11

// NULLISH  = SIRVE PARA

// EL || OR sirva para decir, si no es una cosa es otra. primero valua el primer valor, el de la izquierda y si no, toma el de la derecha
// EL doble signo de interrogacion ?? es el Nullish , funciona como el OR pero no es exactamente igual
const NullValue = "Hola";
const emptyStr = "";
const number = 0;

// const A = NullValue || "DefaultValue"; // si nullvalue da null, toma como referencia a " DefaultValue"
// console.log("🚀 ~ A:", A);
// const B = emptyStr || " DefaultValue"; // si no hay nada en mi primera variable, toma el valor de la derecha
// console.log("🚀 ~ B:", B);
// const C = number || "DefaultValue"; // igual que los anteriores
// console.log("🚀 ~ C:", C);

const A = NullValue ?? "DefaultValue"; // si nullvalue da null, toma como referencia a " DefaultValue"
console.log("🚀 ~ A:", A);
const B = emptyStr ?? " DefaultValue"; // si no hay nada en mi primera variable, toma el valor de la derecha
console.log("🚀 ~ B:", B);
const C = number ?? "DefaultValue"; // igual que los anteriores
console.log("🚀 ~ C:", C);

if (NullValue != null) {
  console.log(" No soy null");
} else {
  console.log(" Soy null");
}
