export default function checkValue(targetValue) {
  let newArr = [];
  newArr = [...targetValue];

  let numberOfPoints = 0;

  for (let index = 0; index < newArr.length; index++) {
    //проверка возвращает только массив с числами.
    if (!Number(newArr[index])) {
      newArr = newArr.filter(
        (e) => Number(e) || e === "0" || e === "." || e === ","
      );
    }
    //проверка меняет запятую на точку
    if (newArr[index] === ",") {
      let pointReplace = newArr.join("").replace(",", ".");
      newArr = pointReplace.split("");
    }
    //проверка удаляет одну точку (последнюю), если их больше двух
    if (newArr[index] === ".") {
      numberOfPoints++;
      if (numberOfPoints > 1) {
        //узнаем индекс последнего єлемента точки
        let indices = [];
        const element = ".";
        let idx = newArr.indexOf(element);
        while (idx !== -1) {
          indices.push(idx);
          idx = newArr.indexOf(element, idx + 1);
        }
        const lastPoint = indices[indices.length - 1];
        //удаляем последнюю точку
        newArr.splice(lastPoint, 1);
      }
    }
  }

  const newValue = newArr.join(""); // превращаем массив в строку

  return newValue;
}
