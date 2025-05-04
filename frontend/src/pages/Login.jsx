import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const axiosReponse = await axios.post("/users/login", {
          email,
          password,
        });
        console.log(axiosReponse);
      } catch (error) {
        alert(`Deu um erro: ${error.response.data}`);
      }
    } else {
      alert("voce precisa preencher os campos");
    }
  };

  /*  
  async function getUsers() {
    const users = await api.get("/users");
  }

  getUsers(); */

  return (
    <section className="flex items-center">
      <div className="gap-4 max-w-96 mx-auto flex flex-col items-center w-full">
        <h1 className="text-3xl font-bold">Faça seu login</h1>
        <form
          className="flex flex-col gap-2 w-full"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            className="w-full lg:flex border border-gray-300 py-2 px-4 rounded-full"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full lg:flex border border-gray-300 py-2 px-4 rounded-full"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="cursor-pointer bg-primary text-white font-bold w-full lg:flex border border-gray-300 py-2 px-4 rounded-full">
            Login
          </button>
        </form>
        <p>
          Ainda não tem uma conta?
          <Link to="/register" className="underline font-semibold">
            {" "}
            Registre-se aqui{" "}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
