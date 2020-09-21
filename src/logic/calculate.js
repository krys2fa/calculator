import operate from './operate';

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;

  switch (buttonName) {
    case '+/-':
      return operate(total, next, operation);

    case '+':
      return operate(total, next, operation);

    case '-':
      return operate(total, next, operation);

    case '÷':
      return operate(total, next, operation);

    case '%':
      return operate(total, next, operation);

    default:
      return 'ERROR';
  }
};

export default calculate;
