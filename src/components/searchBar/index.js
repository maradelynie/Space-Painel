import React, { useState } from "react";
import Input from "../input";

import "./style.scss";

import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar() {
  return (
    <div className="searchBar_container">
      <FontAwesomeIcon className="icon_search" icon={faFilter} />
      <div className="input_search">
        <Input placeholder="Buscar" type="search" />
      </div>
    </div>
  );
}
