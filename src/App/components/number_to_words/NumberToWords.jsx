import React, { useState, useEffect } from 'react';
import './NumberToWords.css';
import { convert } from 'number-to-cyrillic';
import { convertNumberToWordsPL } from './utils/numberToWordsPl';

export const NumberToWords = () => {
  const [number, setNumber] = useState('');
  const [words, setWords] = useState('');
  const [language, setLanguage] = useState('uk');

  const handleInputChange = (e) => {
    let newNumber = e.target.value;

    if (parseInt(newNumber) > 999999999999) {
      newNumber = '999999999999';
    }

    setNumber(newNumber);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  useEffect(() => {
    let newWords = '';

    if (language === 'pl') {
      newWords = convertNumberToWordsPL(number);
    } else {
      const numberWords = convert(number, { language });
      newWords =
        numberWords.convertedInteger +
        ' ' +
        numberWords.integerCurrency +
        ' ' +
        numberWords.fractionalString +
        ' ' +
        numberWords.fractionalCurrency;
    }

    setWords(newWords);
  }, [number, language]);

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
            max={999999999999}
          />
        </label>
      </form>
      <div className="language-switch">
        <span>Мова: </span>
        <label>
          <input
            type="radio"
            value="uk"
            checked={language === 'uk'}
            onChange={handleLanguageChange}
          />
          Українська
        </label>
        <label>
          <input
            type="radio"
            value="en"
            checked={language === 'en'}
            onChange={handleLanguageChange}
          />
          Англійська
        </label>
        <label>
          <input
            type="radio"
            value="pl"
            checked={language === 'pl'}
            onChange={handleLanguageChange}
          />
          Польська
        </label>
      </div>
      <div className="result">{words}</div>
    </div>
  );
};
