//очищает инпуты
export const clearInp = (array) => {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            element.clearValue()
        }
        return array
    }