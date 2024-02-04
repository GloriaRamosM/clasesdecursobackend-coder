/* setTimeout Sintaxis:

setTimeout(funcionAEjecutar, tiempoDeDemoraEnMilisegundos)*/

//const hora = new Date().toLocaleTimeString();
// const fecha = new Date().toLocaleDateString();

/**
 * setTimeOut: retrasa la ejecucion segun el tiempo que le de.! puede simular una asincronia
 */

// timer es una funcion que espera recibir un callback como parametro
// setTimeout es una funcion que esta recibiendo una funcion (callback) como parametro
//

const timer = (callback) => {
  setTimeout(() => {
    callback();
  }, 3000);
};

function mostrar() {
  console.log("yo me muestro en la funcion callback");
}

console.log("yo voy en tiempo normal");
console.log("yo finalice");
timer(mostrar);

// setInterval, funciona tipo for, se va ejecutando
//y hay que decirle hasta cuando, para que no quede infinito. siempre lleva un clearInterval

const contador = () => {
  let contador = 1;
  console.log("Realizando operacion");

  let timer = setInterval(() => {
    console.log("Hola soy", contador++);

    if (contador > 6) {
      console.log("tarea finalizada");
      clearInterval(timer);
    }
  }, 1000);
};

console.log("iniciando tarea");
contador();
