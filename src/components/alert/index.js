import React, { useState } from "react";
import Button from "../button";

import "./style.scss";

import { showAlert } from "../../redux/actions";
import { useDispatch } from "react-redux";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Alert() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="modal_background"></div>
      <div className="addPlanet_card">
        <header className="addPlanet_header">
          <h3>Acesso Negado</h3>
          <FontAwesomeIcon
            onClick={() => dispatch(showAlert())}
            className="addPlanet_icon"
            icon={faTimes}
          />
        </header>
        <div className="alert_content">
          <p>Creneciais inválidas.</p>
          <Button
            text="OK"
            onClick={() => dispatch(showAlert())}
            type="button"
          />
        </div>
      </div>
    </>
  );
}
