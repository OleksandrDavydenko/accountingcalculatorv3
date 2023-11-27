export const convertNumberToWordsPL = (number) => {
  const units = ['', 'jeden', 'dwa', 'trzy', 'cztery', 'pięć', 'sześć', 'siedem', 'osiem', 'dziewięć'];
  const teens = ['', 'jedenaście', 'dwanaście', 'trzynaście', 'czternaście', 'piętnaście', 'szesnaście', 'siedemnaście', 'osiemnaście', 'dziewiętnaście'];
  const tens = ['', 'dziesięć', 'dwadzieścia', 'trzydzieści', 'czterdzieści', 'pięćdziesiąt', 'sześćdziesiąt', 'siedemdziesiąt', 'osiemdziesiąt', 'dziewięćdziesiąt'];
  const hundreds = ['', 'sto', 'dwieście', 'trzysta', 'czterysta', 'pięćset', 'sześćset', 'siedemset', 'osiemset', 'dziewięćset'];
  const thousands = ['tysiąc', 'tysiące', 'tysięcy'];
  const millions = ['milion', 'miliony', 'milionów'];
  const billions = ['miliard', 'miliardy', 'miliardów'];

  let result = '';

  const convertThreeDigits = (num) => {
    let result = '';

    const digit = Math.floor(num / 100);
    const rest = num % 100;

    if (digit > 0) {
      result += hundreds[digit] + ' ';
    }

    if (rest >= 20) {
      const ten = Math.floor(rest / 10);
      const unit = rest % 10;

      result += tens[ten] + ' ';
      result += units[unit] + ' ';
    } else if (rest >= 10) {
      result += teens[rest - 10] + ' ';
    } else if (rest > 0) {
      result += units[rest] + ' ';
    }

    return result.trim();
  };

  const num = parseFloat(number.replace(',', '.'));
  const isNegative = num < 0;
  const numAbs = Math.abs(num);

  if (isNaN(numAbs) || numAbs >= 1e12) {
    return 'zero groszy';
  }

  if (numAbs === 0) {
    return 'zero';
  }

  let numString = numAbs.toFixed(2).toString();
  const parts = numString.split('.');

  const rubles = parseInt(parts[0], 10);
  const pennies = parseInt(parts[1], 10);

  let rublesWords = '';
  let penniesWords = '';

  if (rubles > 0) {
    const billionsPart = Math.floor(rubles / 1e9);
    const millionsPart = Math.floor((rubles % 1e9) / 1e6);
    const thousandsPart = Math.floor((rubles % 1e6) / 1e3);
    const unitsPart = rubles % 1e3;

    if (billionsPart > 0) {
      rublesWords += convertThreeDigits(billionsPart) + ' ' + (billionsPart === 1 ? billions[0] : (billionsPart < 5 ? billions[1] : billions[2])) + ' ';
    }

    if (millionsPart > 0) {
      rublesWords += convertThreeDigits(millionsPart) + ' ' + (millionsPart === 1 ? millions[0] : (millionsPart < 5 ? millions[1] : millions[2])) + ' ';
    }

    if (thousandsPart > 0) {
      rublesWords += convertThreeDigits(thousandsPart) + ' ' + (thousandsPart === 1 ? thousands[0] : (thousandsPart < 5 ? thousands[1] : thousands[2])) + ' ';
    }

    if (unitsPart > 0) {
      rublesWords += convertThreeDigits(unitsPart) + ' ';
    }
  }

  if (pennies > 0) {
    penniesWords += convertThreeDigits(pennies) + ' ' + (pennies === 1 ? 'grosz' : (pennies < 5 ? 'grosze' : 'groszy'));
  } else {
    penniesWords = '00 groszy' + (rublesWords ? ' ' : '');
  }

  result += rublesWords + (rublesWords !== '' ? 'złotych ' : '');
  result += penniesWords !== '' ? 'i ' + penniesWords : '';

  return isNegative ? 'minus ' + result : result;
};
