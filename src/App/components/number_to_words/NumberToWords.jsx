import React, { useState } from "react";
import "./NumberToWords.css";
import { convert } from "number-to-cyrillic";

export const NumberToWords = () => {
  const [number, setNumber] = useState("");
  const [words, setWords] = useState("");

  const handleInputChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let numberWords = convert(number);
    console.log(numberWords);
    numberWords =
      numberWords.convertedInteger +
      " " +
      numberWords.integerCurrency +
      " " +
      numberWords.fractionalString +
      " " +
      numberWords.fractionalCurrency;
    setWords(numberWords);
  };

  return (
    <div className="container">
      <h1>Сума прописом</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Введіть число:
          <input
            type="number"
            className="input_prop"
            value={number}
            onChange={handleInputChange}
          />
        </label>
        <button className="button_prop" type="submit">
          Обчислити
        </button>
      </form>
      <div className="result">{typeof words === "string" ? words : ""}</div>
    </div>
  );
};
