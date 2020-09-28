import React from "react";
import "./style.scss";

import { faSortDown } from "@fortawesome/free-solid-svg-icons";
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
        return (
          <li key={item.id} className="contentItem_container">
            <div onClick={(e) => showDetails(e)} className="contentItem_header">
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
      })}
    </>
  );
}
