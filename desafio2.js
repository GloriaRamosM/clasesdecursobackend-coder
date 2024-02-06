import fs from "fs";

class ProductMannager {
  constructor(path) {
    this.productos = [];
    this.path = path;
  }

  getProductos = async () => {
    try {
      const productsfile = await fs.promises.readFile(this.path, "utf-8");
      const products = await JSON.parse(productsfile);
      this.productos = products;
      return this.productos;
    } catch (error) {
      if (error.code == "ENOENT") {
        await fs.promises.writeFile(this.path, "[]");
        console.log("Se creo el archivo en la ruta " + this.path);
        return this.productos;
      }
    }
  };

  async agregarProductos(
    titulo,
    descripcion,
    precio,
    rutaDeImagen,
    codigo,
    stock
  ) {
    if (
      !titulo ||
      !descripcion ||
      !precio ||
      !rutaDeImagen ||
      !codigo ||
      !stock
    ) {
      return console.log("Falta agregar datos a este producto");
    }

    const productoExistente = this.productos.some(
      (producto) => producto.codigo === codigo
    );

    if (productoExistente) {
      console.log("Producto ya existe , no se puede agregar");
      return;
    }

    const producto = {
      id: this.generarId(),
      titulo: titulo,
      descripcion: descripcion,
      precio: precio,
      rutaDeImagen: rutaDeImagen,
      codigo: codigo,
      stock: stock,
    };

    this.productos.push(producto);
    await fs.promises.writeFile(
      this.path,
      JSON.stringify(this.productos, null, "\t")
    );
  }

  generarId() {
    let id = 0;

    if (this.productos.length === 0) {
      id = 1;
    } else {
      id = this.productos[this.productos.length - 1].id + 1;
    }
    return id;
  }

  getProductoById(productoId) {
    const producto = this.productos.find(
      (producto) => producto.id === productoId
    );
    if (!producto) {
      console.log("Producto no encontrado");
      return null;
    }
    console.log("el producto fue encontrado");

    return producto;
  }

  // falta arreglar esto, y testear todo!
  async updateProduct(productoId, cambios) {
    this.productos = this.productos.map((producto) => {
      if (producto.id === productoId) {
        producto = { ...producto, ...cambios };
      }
      return producto;
    });
    await fs.promises.writeFile(
      this.path,
      JSON.stringify(this.productos, null, "\t")
    );
  }

  // METODO  DELETEPRODUCT
  /*1.El metodo deleteProduct recibe como parametro un ID
  2. Crea una constante y aplica sobre mi this.productos(de mi clase) un finIndex, que lo que hace 
  es ubicar el index del elemento en mi array que coincida o cumpla con la condicion que paso despues.
  3. la condicion es que producto.id(el producto sobre el que itera findIndex) coincida con productoId que llega por parametro
  4.si findIndex no encuentra nada, que cumpla, devuelve -1, pero si Si encuentra toma el indice y lo guarda, 
  en este caso yo lo guarde en la constante productoIndex.
  5.If( si es diferente a -1 quiere decir que si lo encontro ) procede a 
  hacer un Splice(en el indice que yo ya ubique con el findIndex y lo habia guardado en mi constante) y el 1 porque 
  el Splice recibe el indice primero y luego la cantidad de elementos a borrar 
  6. Luego lo sobre escibe con writeFile, y actualiza mi this.productos
  7. Si el resultado de el FindIndex es -1, es que no encontro coincidencia 
  en la condicion y hace el console.log(no se encontro ningun producto con ese ID, que recibe por parametro)*/

  async deleteProduct(productoId) {
    const productoIndex = this.productos.findIndex(
      (producto) => producto.id === productoId
    );

    if (productoIndex !== -1) {
      console.log("Producto encontrado, va a ser eliminado");
      this.productos.splice(productoIndex, 1);
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.productos, null, "\t")
      );
      console.log("Producto eliminado");
    } else {
      console.log(
        `No se encontró ningún producto con el ID ${productoId} por esto, no se puede eliminar`
      );
    }
  }
}

let cambios = {
  rutaDeImagen: "esta si",
  precio: 370,
};

async function pruebas() {
  const manejadorDeProducto = new ProductMannager("./productos.json");
  await manejadorDeProducto.getProductos();
  await manejadorDeProducto.agregarProductos(
    "Porducto Prueba",
    "Esto es un producto prueba",
    300,
    "sin ruta",
    "Codigo123",
    50
  );

  console.log(manejadorDeProducto.getProductoById(1));

  manejadorDeProducto.deleteProduct(2);
  manejadorDeProducto.updateProduct(1, cambios);
}

pruebas();

// Debo comentar todos los metodos para recodar como funcionan
