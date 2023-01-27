import React, {useState} from "react";
import './CurrenciesExchanges.css';

function checkSum(activeInput, activeCurrencySecond, activeCurrencyFirst) {
    return ((activeInput * activeCurrencySecond) / activeCurrencyFirst).toFixed(4);
}

export const CurrenciesExchanges = ({ currenciesData }) => {

    const [activeCurrencyFirst, setActiveCurrencyFirst] = useState(currenciesData[0].rate);
    const [activeCurrencySecond, setActiveCurrencySecond] = useState(currenciesData[0].rate);
    const [firstInput, setFirstInput] = useState();
    const [secondInput, setSecondInput] = useState();
    const [activeInput, setActiveInput] = useState(1);

    const currenciesOptions = currenciesData.map((currency) => (
        <option key={currency.r030} value={currency.rate}>{currency.cc + " " + currency.txt}</option>
    ));

    const calcFInput = activeInput === 1 ? firstInput : checkSum(secondInput, activeCurrencySecond, activeCurrencyFirst);
    const calcSInput = activeInput === 2 ? secondInput : checkSum(firstInput, activeCurrencyFirst, activeCurrencySecond);
        
    return (
        <div className="converter_wrapper">
            <div className="converter_block">
                <select
                    className="converter_select"
                    onChange={e => {
                        setActiveCurrencyFirst(e.target.value);
                }}>
                    {currenciesOptions}
                </select>
                <input
                    className="input_view"
                    type="number"
                    value={calcFInput || ""}
                    onChange={e => {
                        setFirstInput(e.target.value);
                        setActiveInput(1);
                    }}
                />
            </div>
            <div className="converter_block">
                <select
                    className="converter_select"
                    onChange={e => {
                        setActiveCurrencySecond(e.target.value)
                }}>
                    {currenciesOptions}
                </select>
                <input
                    className="input_view"
                    type="number"
                    value={calcSInput || ""}
                    onChange={e => {
                        setSecondInput(e.target.value);
                        setActiveInput(2);
                    }}
                />

            </div>
        </div>
    )
}