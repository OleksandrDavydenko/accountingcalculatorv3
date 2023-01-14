  //функция принимает массив инпутов и создает обьект со значениями
export const incomeData = (array) => {
        let data = {timestamp: String(Date.now())}
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            let name = element.inputAttribute.name
            data[name] = element.value
        }
        return data
    }