import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./style.scss";

import { setPage } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  faSignOutAlt,
  faGalacticRepublic,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation() {
  const dispatch = useDispatch();
  const { page, pages } = useSelector((state) => state);
  const history = useHistory();

  const navigate = (clicked) => {
    dispatch(setPage(clicked));
  };

  return (
    <>
      <FontAwesomeIcon className="icon_navi-selected" icon={page.icon} />

      <nav className="navigation_container">
        <div>
          {pages
            .filter((item) => item.icon !== page.icon)
            .map((item) => {
              return (
                <FontAwesomeIcon
                  key={item.title}
                  onClick={() => navigate(item)}
                  className="icon_navi"
                  icon={item.icon}
                />
              );
            })}
        </div>
        <FontAwesomeIcon
          onClick={() => history.push(`/`)}
          className="icon_navi"
          icon={faSignOutAlt}
        />
      </nav>
    </>
  );
}
