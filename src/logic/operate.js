import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const number1 = new Big(numberOne);
  const number2 = new Big(numberTwo);

  let total;

  switch (operation) {
    case '+':
      total = number1.plus(number2);
      break;
    case '-':
      total = number1.minus(number2);
      break;
    case 'X':
      total = number1.times(number2);
      break;
    case '÷':
      total = number1.div(number2);
      break;
    case '%':
      total = number1.times(0.01);
      break;
    case '+/-':
      total = number1.times(-1);
      break;
    default:
      return 'ERROR';
  }
  return { total, number2, operation };
};

export default operate;
