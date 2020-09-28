import React, { useState } from "react";
import Input from "../input";

import "./style.scss";

import { useSelector } from "react-redux";
import { setList, showAdd } from "../../redux/actions";
import { useDispatch } from "react-redux";

import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar() {
  const dispatch = useDispatch();
  const { page, records } = useSelector((state) => state);

  const [search, setSearch] = useState("");

  const showAddBtn = () => {
    if (page.title === "Planetas") {
      return (
        <FontAwesomeIcon
          className="icon_search"
          onClick={() => dispatch(showAdd())}
          icon={faPlusCircle}
        />
      );
    }
  };

  const filterList = (value) => {
    setSearch(value);
    const newList = records.filter((iten) =>
      iten.nome.toLowerCase().includes(value)
    );
    dispatch(setList(newList));
  };

  return (
    <div className="searchBar_container">
      <div className="searchInput_container">
        <Input
          placeholder="Buscar"
          onChange={(e) => filterList(e.target.value)}
          value={search}
          type="search"
        />
      </div>
      {showAddBtn()}
    </div>
  );
}
