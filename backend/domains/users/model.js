import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

export default model("User", userSchema);

//Criando um esqueleto do usuario

//Mongoose é uma ferramenta que ajuda a organizar e controlar os dados guardados no banco de dados MongoDB em aplicativos feitos com Node.js.
