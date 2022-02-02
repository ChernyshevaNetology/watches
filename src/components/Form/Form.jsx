import React, { useState } from "react";
import "App.css";

const Form = ({ handleSubmit }) => {
  const [dataValue, setDataValue] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setDataValue({ ...dataValue, [name]: value });
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e, dataValue)}>
      <label htmlFor="name1" className="label-name">
        Название
      </label>
      <input
        id="name1"
        autoFocus
        className="input-name"
        defaultValue=""
        type="text"
        onChange={handleChange}
        name="name"
        required={true}
        placeholder="Город"
      />

      <label htmlFor="timeZone" className="label-timezone">
        Временная зона
      </label>
      <input
        id="timeZone"
        className="input-timezone"
        type="number"
        onChange={handleChange}
        name="timeZone"
        defaultValue=""
        required={true}
        placeholder="+ часов"
      />
      <button className="btn-submit">Добавить</button>
    </form>
  );
};

export { Form };
