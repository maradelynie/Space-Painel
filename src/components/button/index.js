import React from "react";
import "./style.scss";

export default function Button({ type, text, onClick }) {
  return (
    <>
      <button className="button_default" onClick={onClick} type={type}>
        {text}
      </button>
    </>
  );
}
