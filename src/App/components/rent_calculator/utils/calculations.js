//Принимает входящие данные, производит расчеты и возвращает обьект с рассчитаными данными:

export const calculations = (incomeData) => {

 const calculatedData = incomeData

 let number = 1


    for (let i = 0; i < calculatedData.length; i++) {
        const element = calculatedData[i]
        // Добавим порядковый номер каждому элементу
        element.number = number++
        // Определим количество месяцев действия для каждого Договора numberOfMonth
        calculatedData[i].numberOfMonth =  monthDiff(new Date(calculatedData[i].aremeentDate), new Date(calculatedData[i].aremeentDateEnd))

        // вартість договору

        element.agreementSum =  (element.numberOfMonth * element.monthPayment).toFixed(2)

        // дисконтована вартість

        function discontValue(params) {
            // вводимо початкові значення 
            let currentValue = 0
            let previosElementMonthPayment = element.monthPayment
            //в циклі рахуємо
            for (let index = 0; index < calculatedData[i].numberOfMonth; index++) {

                calculatedData[i].currentValue = (previosElementMonthPayment * 100/(100 + Number(element.discountRate))).toFixed(2)

                previosElementMonthPayment = calculatedData[i].currentValue;

                currentValue += Number(calculatedData[i].currentValue);
                //console.log(calculatedData[i].currentValue);
            }
            element.currentValue = currentValue.toFixed(2);
            
            return element.currentValue
            
        }

        discontValue()

        //Амортизація місячна

        element.monthAmort = (element.currentValue / element.numberOfMonth).toFixed(2)

        //Фінансові витрати

        element.financeCosts = (element.agreementSum - element.currentValue).toFixed(2)

    }
        return calculatedData
}

// Вспомагательные функции:


//Возвращает месяцы, округляет до целого
function monthDiff(dateFrom, dateTo) {
    return ((dateTo.getTime() - dateFrom.getTime()) / 1000 / 60 / 60 /24 / (365/12)).toFixed(0);
    //Как вариант решения:
    /* Math.round(dateTo.getMonth() - dateFrom.getMonth() +
    (12 * (dateTo.getFullYear() - dateFrom.getFullYear())) + 
    ((dateTo.getDate() - dateFrom.getDate()) / 365/12)) */
}