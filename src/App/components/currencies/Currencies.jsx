import React, { useState } from "react";
import { useCurrenciesData } from "../../utils/hooks/useCurrenciesData";
import { Loader } from "../loader/Loader";
import { CurrenciesExchanges } from "./CurrenciesExchanges";
import './CurrenciesExchanges.css';


export const Currencies = () => {
    const [currencies, setCurrensies] = useState();

  const onSuccess = (data) => {
    function SortArray(x, y) {
      return x.txt.localeCompare(y.txt);
    }

    data.sort(SortArray);

    const UAH = { cc: "UAH", r030: 980, rate: 1, txt: "Українська гривня" };
    data.unshift(UAH);

    setCurrensies(data);
  };

  const onError = (error) => {
    console.log("Error", error);
  };

  const { isLoading, isError, error, isFetching } = useCurrenciesData(
    onSuccess,
    onError
  );

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="currencies_wrapp">
        {isLoading || isFetching || !currencies ? (
          <Loader />
        ) : (
          <CurrenciesExchanges currenciesData={currencies} />
        )}
    </div>
  );
} 