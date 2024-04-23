import express from "express";
import handlebars from "express-handlebars";
import { authToken, generateToken } from "./utils.js";
const app = express();

//middlewares
app.use(express.json());

//settings
app.engine("handlebars", handlebars.engine());
app.set("views", "./src/views");
app.set("view engine", "handlebars");

app.use(express.static("./src/public"));

// usuarios en memoria DB
const users = [];

//view routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

//API ROUTES
// REGISTER
app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;
  const exists = users.find((user) => user.email === email);
  if (exists)
    return res
      .status(400)
      .send({ status: "error", error: "User already exists" });

  //Creamos el usuario
  const user = {
    name,
    email,
    password,
  };

  // SI TENEMOS UN NUEVO USUARIO SE LO PASAMOS POR PARAMETRO A LA FUNCION GENERATE-TOKEN aca es logica de token
  users.push(user);
  const access_token = generateToken(user);
  res.send({ status: "success", access_token });
});

//LOGIN
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  console.log(user);
  if (!user)
    return res
      .status(400)
      .send({ status: "error", error: "Invalid credentials" });

  // aca va la logica de token
  const access_token = generateToken(user);
  res.send({ status: "success", access_token });
});

app.get("/api/current", authToken, (req, res) => {
  res.send({ status: "success", payload: req.user });
});

//Listeners
app.listen(5000, () => console.log("Listening on 5000"));
