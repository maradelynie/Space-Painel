import React from "react";
import "./style.scss";

import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import {
  faRebel,
  faGalacticRepublic,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ListPlanets({ list }) {
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
      {list.map((item) => {
        if (item.habitantes) {
          return (
            <li key={item._id} className="contentItem_container">
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
        }
      })}
    </>
  );
}
