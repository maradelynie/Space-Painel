import React, { useState, useEffect } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import Alert from "../../components/alert";

import { useHistory } from "react-router-dom";
import { postAuthApi } from "../../api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showAlert } from "../../redux/actions";

import "./style.scss";

export default function Login() {
  const { alert } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const showAlertModal = () => {
    if (alert) {
      return <Alert />;
    }
  };

  return (
    <>
      {showAlertModal()}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const response = await postAuthApi(email, password);
            localStorage.setItem("token", response.token);
            history.push("/home");
          } catch {
            dispatch(showAlert());
          }
        }}
        className="login_form"
      >
        <p>Bem-vindo, rebelde, utilize suas credenciais para acessar.</p>
        <div className="login_inputs">
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="e-mail"
            type="email"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="senha"
            type="password"
          />
        </div>
        <Button text="Entrar" type="submit" />
      </form>
    </>
  );
}
