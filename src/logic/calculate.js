import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  switch (buttonName) {
    case '+/-':
    case '+':
    case '-':
    case '÷':
    case '%':
      return operate(total, next, operation);
    case 'AC':
      total = '0';
      next = null;
      operation = null;
      return total;
    case '.':
      return '';
    case '=':
      return '';

    default:
      return 'ERROR';
  }
};

export default calculate;
