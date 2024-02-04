import UserManager from "./manager.js";

let manager = new UserManager();

// let user = {
//   nombre: "Glo",
//   apellido: "Ramos",
//   nombre_usuario: "lamadrina",
//   contrasena: "123",
// };

// let usuario = await manager.crearUsuario(user);
// console.log("🚀 ~ usuario:", usuario);

await manager.getUsuarios();
console.log("🚀 ~ await manager.getUsuarios();:", await manager.getUsuarios());

await manager.validarUsuario("lamadrina", "123");
