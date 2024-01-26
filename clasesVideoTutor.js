// Ejercicios con clases vistos en internet

/* Para crear una clase, debo pensar que estoy creando 
como un molde, con su constructor es como si definiera los parametos, 
y luego al querer usar ese molde debo usar la palabara new + el nombre de la clase*/

class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  sonar() {
    console.log("Hago sonidos porque estoy vivo");
  }

  saludar() {
    console.log(` hola me llamo ${this.nombre}`);
  }
}

class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    //super() es un metodo que manda a llamar al constructor de la clase padre
    //( Animal en este caso) que estoy usando en Perro
    super(nombre, genero);
    this.tamanio = tamanio;
  }

  sonar() {
    console.log(" Soy un perro y mi sonido es un ladrido");
  }

  ladrar() {
    console.log("yo digo Guaauu guauu");
  }
}

/* para llamar a los metodos de una clase, debo llamar a la variable a la cual 
le asigne la clase, y luego ingresar a ese metodo que seria una funcion en realidad*/

const perrito = new Perro("poshi", "macho", "mediano");
const perrita = new Animal("cofi", "hembra");
console.log(perrita);
perrita.saludar();
perrita.sonar();
console.log(perrito);
perrito.saludar();
perrito.sonar();
perrito.ladrar();
