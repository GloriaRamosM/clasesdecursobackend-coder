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

// let arrayDeNumeros = [2, 4, 6, 8, 10];

// function sumarMayores(arr, callback) {
//   let mayores = arr.sort((a, b) => b - a);

//   let resultado = callback(mayores);

//   return resultado;
// }

// function promedio(arr) {
//   let suma = arr[0] + arr[1];

//   let resultado = suma / 2;

//   return resultado;
// }

// function doble(arr) {
//   let suma = arr[0] + arr[1];

//   let resultado = suma * 2;

//   return resultado;
// }
// console.log(
//   "🚀 ~ sumarMayores(arrayDeNumeros);:",
//   sumarMayores(arrayDeNumeros, doble)
// );

// // esto que acabamos de hacer Si es un callback porque la funcion promedio  esta pasando por parametro
// // pero tambien lo podemos pasar fuera de los parametros

// EJEMPLO DE LA CALCULADORA para identificar el callback

// const sumar = (a, b) => a + b;
// const restar = (a, b) => a - b;
// const multiplicar = (a, b) => a * b;
// const dividir = (a, b) => a / b;

// function calculadora(a, b, callback) {
//   return callback(a, b);
// }

// console.log(calculadora(20, 8, dividir));

// PROMESAS = PROGRAMACION ASINCRONICA

function sumar(a, b) {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) reject("Operacion innecesaria");
    if (a + b < 0)
      reject("La calculadora solo debe devolver valores positivos");
    resolve(a + b);
  });
}

async function calculos() {
  try {
    let suma = await sumar(1, 8);
    console.log("🚀 ~ calcular ~ suma:", suma);
  } catch (err) {
    console.log(err);
  }
}

calculos();
