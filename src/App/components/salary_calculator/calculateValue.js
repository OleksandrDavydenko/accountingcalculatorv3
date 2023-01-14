import SALARY_CONFIG from "./salaryConfig";

export default function calculateValue({
  dirtySalary = "",
  pureSalary = "",
  pdfo = "",
  militaryTax = "",
}) {
  let newDirtySalary = "";
  let newPureSalary = "";
  let newPdfo = "";
  let newMilitaryTax = "";

  if (dirtySalary > 0) {
    newDirtySalary = dirtySalary;
    newPureSalary = (dirtySalary * 0.805).toFixed(2);
    newPdfo = (dirtySalary * SALARY_CONFIG.ndflPercent).toFixed(2);
    newMilitaryTax = (dirtySalary * SALARY_CONFIG.vsPercent).toFixed(2);
  }
  if (pureSalary > 0) {
    newPureSalary = pureSalary;
    newDirtySalary = (pureSalary / 0.805).toFixed(2);
    newPdfo = (newDirtySalary * SALARY_CONFIG.ndflPercent).toFixed(2);
    newMilitaryTax = (newDirtySalary * SALARY_CONFIG.vsPercent).toFixed(2);
  }
  if (pdfo > 0) {
    newPdfo = pdfo;
    newDirtySalary = (pdfo / SALARY_CONFIG.ndflPercent).toFixed(2);
    newPureSalary = (newDirtySalary * 0.805).toFixed(2);
    newMilitaryTax = (newDirtySalary * SALARY_CONFIG.vsPercent).toFixed(2);
  }
  if (militaryTax > 0) {
    newMilitaryTax = militaryTax;
    newDirtySalary = (militaryTax / SALARY_CONFIG.vsPercent).toFixed(2);
    newPureSalary = (newDirtySalary * 0.805).toFixed(2);
    newPdfo = (newDirtySalary * SALARY_CONFIG.ndflPercent).toFixed(2);
  }

  return { newDirtySalary, newPureSalary, newPdfo, newMilitaryTax };
}
