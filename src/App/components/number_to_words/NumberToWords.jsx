import React, { useState } from "react";
import "./NumberToWords.css";
import { convert } from "number-to-cyrillic";

export const NumberToWords = () => {
  const [number, setNumber] = useState("");
  const [words, setWords] = useState("");
  const [language, setLanguage] = useState("uk");

  const handleInputChange = (e) => {
    const newNumber = e.target.value;
    setNumber(newNumber);
    const numberWords = convert(newNumber, { language });
    const newWords =
      numberWords.convertedInteger +
      " " +
      numberWords.integerCurrency +
      " " +
      numberWords.fractionalString +
      " " +
      numberWords.fractionalCurrency;
    setWords(newWords);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    const numberWords = convert(number, { language: e.target.value });
    const newWords =
      numberWords.convertedInteger +
      " " +
      numberWords.integerCurrency +
      " " +
      numberWords.fractionalString +
      " " +
      numberWords.fractionalCurrency;
    setWords(newWords);
  };

  return (
    <div className="container">
      <h1>Сума прописом</h1>
      <form>
        <label>
          Введіть число:
          <input
            type="number"
            className="input_prop"
            value={number}
            onChange={handleInputChange}
            placeholder="0.00"
          />
        </label>
      </form>
      <div className="language-switch">
        <span>Мова: </span>
        <label>
          <input
            type="radio"
            value="uk"
            checked={language === "uk"}
            onChange={handleLanguageChange}
          />
          Українська
        </label>
        <label>
          <input
            type="radio"
            value="en"
            checked={language === "en"}
            onChange={handleLanguageChange}
          />
          Англійська
        </label>
      </div>
      <div className="result">{words}</div>
    </div>
  );
};
