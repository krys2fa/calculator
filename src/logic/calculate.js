/* eslint-disable radix */
import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  switch (buttonName) {
    case '%':
    case '÷':
    case '-':
    case '+':
    case '+/-':
      operation = buttonName;
      return { total, next, operation };
    case 'AC':
      return { total: '0', next: null, operation: null };
    case '.':
      if ((total && !next) || (!total && !next)) {
        total += buttonName;
      } else if (operation) {
        next += buttonName;
      }
      return { total, next, operation };
    case [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(parseInt(buttonName)):
      if (operation) {
        next += buttonName;
      } else if (!operation) {
        total += buttonName;
      }
      return { total, next, operation };
    case '=':
      return operate(total, next, operation);

    default:
      return data;
  }
};

export default calculate;
