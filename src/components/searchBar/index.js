import React, { useState } from "react";
import Input from "../input";
import Filter from "../filter";

import "./style.scss";

import { useSelector } from "react-redux";
import { setList } from "../../redux/actions";
import { useDispatch } from "react-redux";

import { faFilter, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar() {
  const dispatch = useDispatch();
  const { page, records } = useSelector((state) => state);

  const [search, setSearch] = useState("");

  // const [showFilter, setShowFilter] = useState(false);

  const showAdd = () => {
    if (page.title === "Planetas") {
      return <FontAwesomeIcon className="icon_search" icon={faPlusCircle} />;
    }
  };

  const filterList = (value) => {
    setSearch(value);
    const newList = records.filter((iten) =>
      iten.nome.toLowerCase().includes(value)
    );
    dispatch(setList(newList));
  };

  // const activeSearch = () => {
  //   if (showFilter) {
  //     return <Filter setShowFilter={setShowFilter} />;
  //   }
  // };
  return (
    <div className="searchBar_container">
      {/* {activeSearch()}
      <FontAwesomeIcon
        onClick={() => setShowFilter(true)}
        className="icon_search"
        icon={faFilter}
      /> */}
      <div className="searchInput_container">
        <Input
          placeholder="Buscar"
          onChange={(e) => filterList(e.target.value)}
          value={search}
          type="search"
        />
      </div>
      {showAdd()}
    </div>
  );
}
