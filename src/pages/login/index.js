import React from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import { useHistory } from "react-router-dom";

import "./style.scss";

export default function Login() {
  const history = useHistory();

  return (
    <form onSubmit={() => history.push(`/home`)} className="login_form">
      <p>Bem-vindo, rebelde, utilize suas credenciais para acessar.</p>
      <div className="login_inputs">
        <Input placeholder="e-mail" type="email" />
        <Input placeholder="senha" type="password" />
      </div>
      <Button text="Entrar" type="submit" />
    </form>
  );
}
