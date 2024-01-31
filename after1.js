// explicacion de This y de clases

function getName() {
  this.name;
  console.log(this.name);
}

globalThis.name = "Leo";

getName(); // ACA el nombre es Leo porque en el this, no le asigne nada
//y toma el nombre que le asigne globalmente

let functions = {
  name: "Jorge",
  getName: getName,
};

functions.getName(); //Jorge, aca es jorge porque aca si asigne un name y la estoy ejecutando dentro
//de un objeto functions y alli si tiene name otro valor
/*Name devuelve el valor de una clave (en uno es Leo y el otro es Jorge) en diferentes entornos aca*/

class Names {
  constructor(name) {
    this.name = name || "Default";
  }

  getName = () => {
    this.name;
    console.log(this.name);
  };
}

const nombres = new Names();
nombres.getName();
