// REPASO

// const saludo = "hola";

// const user = {
//   name: "Manolo",
// };
// console.log("🚀 ~ user:", user);

// user.name = " Glo";

// function saludarClase(personas) {
//   return `Hola a todos, silencien a Santiago porfi  ${personas}`;
// }

// let resultado = saludarClase(8);
// console.log("🚀 ~ resultado:", resultado);

// EJERCICIO DE CLASE

// SE DEBE HACER UNA LISTA Y RETORNAR SI ESTA VACIA Y SI NO ESTA VACIA, SE DEBE HACER UN RECORRIDO Y MOSTRAR SU LONGITUD

const lista = ["manzana", "pera"];

// MI SOLUCION

// function mostrarLista(arr ) {
//   if (lista == 0) {
//     console.log("la lista esta vacia");
//   } else console.log(lista.length);
// }

// mostrarLista();

// SOLUCION DEL PROFE

function mostrarLista1(array) {
  let longitud = array.length;

  if (longitud == 0) {
    return " el array esta vacio";
  }

  return `El largo del array es de  ${longitud}`;
}

let resultado = mostrarLista1(lista);

console.log(resultado);

const resultado4 = " hola ";
