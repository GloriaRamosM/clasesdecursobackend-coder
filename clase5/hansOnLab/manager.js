import fs from "fs";
import crypto from "crypto";

// estableci mi path desde antes con usuarios.json porque alli estare guardando mi data
const path = "./Usuarios.json";

export default class UserManager {
  /* Dentro de mi clase UserManager tengo el metodo getUsuarios, que es un metodo asincronico porque cuando trabajamos con archivos lo mejor es que sea asi. 
  1. if existe mi path con algo adentro, entonces leelo
  2. esa data que fui a leer con su encoding la voy a parsear
  3. por ultimo retornala, para cortar ejecicion 
  4. en caso de que no haya nada en existencia, retorname un [] array vacio  */
  getUsuarios = async () => {
    if (fs.existsSync(path)) {
      const data = await fs.promises.readFile(path, "utf-8");
      const users = JSON.parse(data);

      return users;
    }

    return [];
  };

  /**/
  crearUsuario = async (usuario) => {
    const usuarios = await this.getUsuarios();

    usuario.salt = crypto.randomBytes(128).toString("base64");

    usuario.contrasena = crypto
      .createHmac("sha256", usuario.salt)
      .update(usuario.contrasena)
      .digest("hex");

    usuarios.push(usuario);
    await fs.promises.writeFile(path, JSON.stringify(usuarios, null, "\t"));

    return usuario;
  };

  validarUsuario = async (username, password) => {
    const usuarios = await this.getUsuarios();
    const usuarioIndex = usuarios.findIndex(
      (u) => u.nombre_usuario === username
    );

    if (usuarioIndex == -1) {
      console.log("Usuario no encontrado");
    }

    const usuario = usuarios[usuarioIndex];
    const newHash = crypto
      .createHmac("sha256", usuario.salt)
      .update(password)
      .digest("hex");

    if (newHash === usuario.contrasena) {
      console.log("Usuario loggeado con exito");
    } else {
      console.log("contrasena invalida");
    }
  };
}
