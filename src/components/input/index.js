import React, { useState, useEffect } from "react";
import "./style.scss";

export default function Input({
  placeholder,
  type,
  onChange,
  value,
  required,
  options,
}) {
  const [style, setStyle] = useState("input_default");

  useEffect(() => {
    const changeStyle = async () => {
      if (type === "search") {
        await setStyle("input_Search");
      }
    };
    changeStyle();
  }, [type]);

  if (options) {
    return (
      <select
        required={required}
        className={style}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
      >
        {options.map((itemOption) => {
          return <option value={itemOption}>{itemOption}</option>;
        })}
      </select>
    );
  } else {
    return (
      <>
        <input
          required={required}
          className={style}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          type={type}
        />
      </>
    );
  }
}
