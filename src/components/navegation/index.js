import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./style.scss";

import {
  faGlobeEurope,
  faUsers,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation({ goToRebels }) {
  const history = useHistory();
  const [selected, setSelected] = useState({
    title: "Planetas",
    icon: faGlobeEurope,
  });
  const [navigationIcons, setNavigationIcons] = useState([
    { title: "Rebeldes", icon: faUsers },
  ]);

  const navigate = (clicked) => {
    setSelected((selected) => {
      const newNav = navigationIcons.filter(
        (icon) => icon.icon != clicked.icon
      );
      newNav.push(selected);
      setNavigationIcons(newNav);
      return clicked;
    });
    goToRebels(clicked.title);
  };

  return (
    <>
      <FontAwesomeIcon className="icon_navi-selected" icon={selected.icon} />

      <nav className="navigation_container">
        <div>
          {navigationIcons.map((icon) => {
            return (
              <FontAwesomeIcon
                onClick={() => navigate(icon)}
                className="icon_navi"
                icon={icon.icon}
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
