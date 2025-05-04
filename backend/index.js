import "dotenv/config";
import express from "express";
import UserRoutes from "./domains/users/routes.js";
import cors from "cors"; // <-- importe aqui

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(cors()); // <-- use aqui
app.use("/users", UserRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando ${PORT}`);
});

//express é uma biblioteca pra rodar servidor HTTP com node.js

// Usando a biblioteca express pra rodar o servidor HTTP na porta 3001
