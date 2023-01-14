import SALARY_CONFIG from "./salaryConfig"

function replaceComma(params) {
    
}

export default function calculateValue(dirtySalary, pureSalary) {
    let newDirtySalary = (dirtySalary - (dirtySalary * SALARY_CONFIG.ndflPercent) -(dirtySalary * SALARY_CONFIG.vsPercent)).toFixed(2)
    let newPureSalary = (pureSalary /0.805).toFixed(2)
    return [newDirtySalary, newPureSalary]
}