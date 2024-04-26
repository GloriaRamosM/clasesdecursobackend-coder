import dotenv from "dotenv";

const program = new Command();

//constante
const environment = "PROD";
dotenv.config({
  path: environment === "DEV" ? "./.env.development" : "./.env.production",
});

export default {
  port: process.env.PORT,
  mongo_url: process.env.MONGO_URL,
  adminUser: process.env.ADMIN_USER,
};
