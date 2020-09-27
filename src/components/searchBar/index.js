import React from "react";
import Input from "../input";

import "./style.scss";

import { faFilter, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar({ page, setSearch, search }) {
  const showAdd = () => {
    if (page === "Planetas") {
      return <FontAwesomeIcon className="icon_search" icon={faPlusCircle} />;
    }
  };

  return (
    <div className="searchBar_container">
      <FontAwesomeIcon className="icon_search" icon={faFilter} />
      <div className="searchInput_container">
        <Input
          placeholder="Buscar"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="search"
        />
      </div>
      {showAdd()}
    </div>
  );
}
