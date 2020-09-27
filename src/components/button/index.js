import React from "react";
import "./style.scss";

export default function Button({ type, text }) {
  return (
    <>
      <button className="button_default" type={type}>
        {text}
      </button>
    </>
  );
}
