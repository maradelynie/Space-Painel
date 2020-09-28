import React from "react";
import "./style.scss";

import ListPlanets from "../listPlanets";
import ListRebels from "../listRebels";

import { useSelector } from "react-redux";

export default function Button() {
  const { list, page } = useSelector((state) => state);

  const showData = () => {
    if (page.title === "Planetas") {
      return <ListPlanets list={list} />;
    }
    return <ListRebels list={list} />;
  };

  return (
    <>
      <ul className="content_data">
        {showData()}

        <h3 className="item_warning">Fim dos registros</h3>
      </ul>

      <div className="content_gradient"> </div>
    </>
  );
}
