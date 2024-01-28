// Programacion sincronica y asincronica

// la mayoria de los metodos de array recibe como parametros obligatorios,  el elemento
// que va a ser cada indice, y la funcion callback

/* En este ejemplo, vemos que el map recibe una funcion 
no importa si esta declara dentro de los mismo parametros, o si 
la declaro y hago por fuera y la llamo dentro del map.*/

// let arrayDeFrutas = ["kiwi", "manzana", "pera", "fresa"];

// arrayDeFrutas.map((fruta) => imprimirFruta(fruta));

// function imprimirFruta(fruta) {
//   console.log(fruta, fruta.length);
// }

let arrayDeNumeros = [2, 4, 6, 8, 10];

function sumarMayores(arr) {
  let mayores = arr.sort((a, b) => b - a);

  let resultado = promedio(mayores);

  return resultado;
}

function promedio(arr) {
  let suma = arr[0] + arr[1];

  let resultado = suma / 2;

  return resultado;
}

console.log(
  "🚀 ~ sumarMayores(arrayDeNumeros);:",
  sumarMayores(arrayDeNumeros)
);
