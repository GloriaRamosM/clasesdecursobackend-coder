import express from "express";

const app = express();

const port = 3000;

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let users = [{ name: "Gloria", last_name: "Ramos" }];

//Rutas

// RUTA POST
// app.post("/api/user", (req, res) => {
//   let user = req.body;

//   if (!user.name || !user.last_name) {
//     return res.status(400).send({ status: "error" });
//   }

//   users.push(user);
//   console.log(users);
//   return res.status(200).send({ status: "usuario OK" });
// });

//RUTA  PUT

// app.put("/api/user/:name", (req, res) => {
//   let user = req.body;

//   let name = req.params.name;

//   let userFound = users.find((user) => user.name == name);

//   if (!user.name || !user.last_name) {
//     return res.status(400).send({ status: "error" });
//   }

//   userFound = user;

//   users[0] = userFound;

//   console.log(users);

//   return res.status(200).send({ status: "todo ok" });
// });

//RUTA DELETE - METODO DELETE
app.delete("/api/user/:name", (req, res) => {
  let name = req.params.name;

  let userFound = users.findIndex((user) => user.name == name);

  if (userFound - 1) {
    return res.status(400).send({ status: "error" });
  }

  users.splice(userFound);

  console.log(users);

  return res.status(200).send({ status: "todo ok" });
});

app.listen(port, () => console.log("Servidor corriendo en el puerto" + port));
