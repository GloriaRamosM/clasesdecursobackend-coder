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

let newArray = [];

let resultado = productos.forEach((producto) => {
  const keys = Object.keys(producto);
  console.log("🚀 ~ resultado ~ keys:", keys);

  keys.forEach((key) => {
    if (!newArray.includes(key)) newArray.push(key);
  });
});
console.log("🚀 ~ newArray:", newArray);
