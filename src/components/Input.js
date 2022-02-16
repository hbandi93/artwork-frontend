import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ placeholder, type, value, handleInput, name }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleInput}
      placeholder={placeholder}
    />
  );
};