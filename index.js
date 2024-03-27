import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dataBaseConnection } from "./db.js";
import { todoRotuer } from "./routes/todo.route.js";

// configuring the dotenv to get data from env
dotenv.config();

// assinging express to app
const app = express();
// getting the port number from .env and assinging to PORT variable
const PORT = process.env.PORT || 8021;

// middlewares
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

// connecting to mongodb
dataBaseConnection();

// this is just an intial check
app.get("/", (req, res) => {
  res.send("Hello World from 8021!");
});

// connecting to todo router
app.use("/todo", todoRotuer);

// making to listen the server to the port
app.listen(PORT, () => console.log("Server listening on PORT => " + PORT));
