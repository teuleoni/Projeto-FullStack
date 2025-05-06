import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Register = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirection, setRedirection] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password && name) {
      try {
        const { data: userDoc } = await axios.post("/users", {
          name,
          email,
          password,
        });

        setUser(userDoc);
        setRedirection(true);
      } catch (error) {
        alert(`Deu um erro ao cadastrar o usuário: ${JSON.stringify(error)}`);
      }
    } else {
      alert("voce precisa preencher o e-mail, o nome e a senha");
    }
  };

  if (redirection) return <Navigate to="/" />;

  return (
    <section className="flex items-center">
      <div className="gap-4 max-w-96 mx-auto flex flex-col items-center w-full">
        <h1 className="text-3xl font-bold">Faça seu cadastro</h1>
        <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full lg:flex border border-gray-300 py-2 px-4 rounded-full"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            Registrar
          </button>
        </form>
        <p>
          Já tem uma conta?
          <Link to="/login" className="underline font-semibold">
            {" "}
            Logue aqui!{" "}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
