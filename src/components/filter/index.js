import React, { useState } from "react";
import Input from "../input";

import "./style.scss";

import { useSelector } from "react-redux";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar({ setShowFilter }) {
  const { records } = useSelector((state) => state);
  console.log(Object.keys(records[0]));
  return (
    <div className="filter_container">
      <header className="filter_header">
        <FontAwesomeIcon
          onClick={() => setShowFilter(false)}
          className="icon_filter"
          icon={faTimes}
        />
      </header>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}
