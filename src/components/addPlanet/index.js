import React, { useState } from "react";
import Input from "../input";
import Button from "../button";

import "./style.scss";

import { useSelector } from "react-redux";
import { showAdd, addRecord } from "../../redux/actions";
import { useDispatch } from "react-redux";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar() {
  const dispatch = useDispatch();

  const [nome, setNome] = useState("");
  const [regiao, setRegiao] = useState("");
  const [setor, setSetor] = useState("");
  const [dominio, setDominio] = useState(null);
  const [habitantes, setHabitantes] = useState("");

  const submitRecord = (e) => {
    e.preventDefault();
    const data = {
      nome: nome,
      setor: setor,
      dominio: dominio === "Rebelde" ? true : false,
      regiao: regiao,
      habitantes: habitantes,
    };
    dispatch(addRecord(data));
    dispatch(showAdd());
  };
  return (
    <>
      <div className="modal_background"></div>
      <div className="addPlanet_card">
        <header className="addPlanet_header">
          <h3>Adicionar Planeta</h3>
          <FontAwesomeIcon
            onClick={() => dispatch(showAdd())}
            className="addPlanet_icon"
            icon={faTimes}
          />
        </header>
        <form onSubmit={(e) => submitRecord(e)} className="addPlanet_form">
          <div className="addPlanet_inputConteiner">
            <Input
              required={true}
              placeholder="Nome"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
              type="Text"
            />
            <Input
              required={true}
              placeholder="Região"
              onChange={(e) => setRegiao(e.target.value)}
              value={regiao}
              type="Text"
            />
            <Input
              required={true}
              placeholder="Habitantes"
              onChange={(e) => {
                if (!isNaN(e.target.value)) setHabitantes(e.target.value);
              }}
              value={habitantes}
              type="Text"
            />
            <Input
              required={true}
              placeholder="Setor"
              onChange={(e) => setSetor(e.target.value)}
              value={setor}
              type="Text"
            />
          </div>
          <div className="addPlanet_select">
            <Input
              required={true}
              placeholder="Setor"
              onSelect={(e) => setDominio(e.target.value)}
              type="Select"
              options={["Império", "Rebelde"]}
            />
          </div>

          <Button text="Adicionar" type="submit" />
        </form>
      </div>
    </>
  );
}
