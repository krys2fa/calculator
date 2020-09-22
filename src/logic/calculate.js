import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  switch (buttonName) {
    case '÷':
    case 'X':
    case '-':
    case '+':
      operation = buttonName;
      return { total, next, operation };
    case '%':
    case '+/-':
      operation = buttonName;
      next = 0;
      return operate(total, next, operation);
    case 'AC':
      return { total: '', next: '', operation: '' };
    case '.':
      if (total && !next) {
        total += buttonName;
      } else if (!total && !next) {
        total = '0.';
      } else if (total && operation) {
        next += buttonName;
      }
      return { total, next, operation };
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
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
