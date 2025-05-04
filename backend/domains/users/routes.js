import { Router } from "express";
import { connectDb } from "../../config/db.js";
import User from "./model.js";
import bcrypt from "bcryptjs";

const router = Router();
const bcryptSal = bcrypt.genSaltSync();

router.get("/", async (req, res) => {
  connectDb();

  try {
    const userDoc = await User.find();
    res.json(userDoc);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  connectDb();

  const { name, email, password } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, bcryptSal);

  try {
    const newUserDoc = await User.create({
      name,
      email,
      password: encryptedPassword,
    });

    res.json(newUserDoc);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  connectDb();

  const { email, password } = req.body;
  try {
    const userDoc = await User.findOne({ email });

    if (userDoc) {
      const passwordCorrect = bcrypt.compareSync(
        password,
        userDoc.password
      );
      const { name, _id } = userDoc;

      passwordCorrect
        ? res.json({ name, _id, email })
        : res.status(404).json("Senha invalida");
    } else {
      res.status(400).json("Usuario nao encontrado");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;

//Arquivo esta definindo endPoints para gerenciar os usuarios

//endPoints que o FrontEnd consome
//exemplo de um endPoint GET /users
