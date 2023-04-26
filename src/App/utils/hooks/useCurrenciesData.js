import { useQuery } from "react-query";
import axios from "axios";

const fetchCurrenciesData = async (date) => {
  //функція, яка змінює формат дати для API

  function formatDate(date) {
    const parts = date.split("-");
    return parts[0] + parts[1] + parts[2];
  }

  const formattedDate = formatDate(date);

  console.log(formattedDate);

  return axios.get(
    `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${formattedDate}&json`
  );
};

export const useCurrenciesData = (date, onSuccess, onError) => {
  return useQuery(["currencies", date], () => fetchCurrenciesData(date), {
    onSuccess,
    onError,
    select: (data) => {
      return data.data;
    },
  });
};
