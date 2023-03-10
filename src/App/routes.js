import {
  LOGIN_ROUTE,
  RENT_ROUTE,
  SALARY_ROUTE,
  VAT_ROUTE,
  CURRENCIES_ROUTE,
} from "./utils/constRoutes";
import { Login } from "./components/login/login";
import { RentCalculator } from "./components/rent_calculator/Rent_calculator";
import { ValueAddedTax } from "./components/vat_calculator/ValueAddedTax";
import { Salary } from "./components/salary_calculator/Salary";
import { Currencies } from "./components/currencies/Currencies";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: VAT_ROUTE,
    Component: ValueAddedTax,
  },
  {
    path: SALARY_ROUTE,
    Component: Salary,
  },
  {
    path: CURRENCIES_ROUTE,
    Component: Currencies,
  },
];

export const privateRoutes = [
  {
    path: RENT_ROUTE,
    Component: RentCalculator,
  },
  {
    path: VAT_ROUTE,
    Component: ValueAddedTax,
  },
  {
    path: SALARY_ROUTE,
    Component: Salary,
  },
  {
    path: CURRENCIES_ROUTE,
    Component: Currencies,
  },
];
