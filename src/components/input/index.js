import React, { useState, useEffect } from "react";
import "./style.scss";

export default function Input({ placeholder, type }) {
  const [style, setStyle] = useState("input_default");
  useEffect(() => {
    const changeStyle = async () => {
      if (type === "search") {
        await setStyle("input_Search");
      }
    };
    changeStyle();
  }, []);

  return (
    <>
      <input className={style} placeholder={placeholder} type={type} />
    </>
  );
}