import React, { useState } from "react";
import "./style.scss";

import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import {
  faRebel,
  faGalacticRepublic,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({ content, page }) {
  const showDetails = (e) => {
    e.persist();
    const header = e.target;
    const details = e.target.nextElementSibling;
    if (details.classList.contains("none")) {
      details.classList.remove("none");
      header.classList.add("contentItem_header-active");
    } else {
      details.classList.add("none");
      header.classList.remove("contentItem_header-active");
    }
  };

  return (
    <>
      <ul className="content_data">
        {content?.map((item) => {
          if (item.habitantes) {
            return (
              <li key={item.id} className="contentItem_container">
                <div
                  onClick={(e) => showDetails(e)}
                  className="contentItem_header"
                >
                  <h3>
                    <FontAwesomeIcon
                      className="icon_item"
                      icon={item.dominio ? faRebel : faGalacticRepublic}
                    />

                    {item.nome}
                  </h3>
                  <FontAwesomeIcon className="icon_item" icon={faSortDown} />
                </div>
                <ul className="contentItem_details none">
                  <li>
                    <p>Habitantes: {item.habitantes.toLocaleString("pt-BR")}</p>
                  </li>
                  <li>
                    <p>Setor: {item.setor}</p>
                  </li>
                  <li>
                    <p>Região: {item.regiao}</p>
                  </li>
                  <li>
                    <p>Domínio: {item.dominio ? "Rebeldes" : "Império"}</p>
                  </li>
                </ul>
              </li>
            );
          } else {
            return (
              <li key={item.id} className="contentItem_container">
                <div
                  onClick={(e) => showDetails(e)}
                  className="contentItem_header"
                >
                  <h3>{item.nome}</h3>
                  <FontAwesomeIcon className="icon_item" icon={faSortDown} />
                </div>
                <ul className="contentItem_details none">
                  <li>
                    <p>Planeta de Origem: {item.origem}</p>
                  </li>
                  <li>
                    <p>Espécie: {item.especie}</p>
                  </li>
                </ul>
              </li>
            );
          }
        })}
        <h3 className="item_warning">Fim dos registros</h3>
      </ul>

      <div className="content_gradient"> </div>
    </>
  );
}
