import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let total = new Big(numberOne);
  const next = new Big(numberTwo);

  switch (operation) {
    case '+':
      total = total.plus(next).toPrecision();
      break;
    case '-':
      total = total.minus(next).toPrecision();
      break;
    case 'X':
      total = total.times(next).toPrecision();
      break;
    case '÷':
      total = numberTwo === '0' ? '0' : total.div(next).toPrecision();
      break;
    case '%':
      total = total.times(0.01).toPrecision();
      break;
    case '+/-':
      total = total.times(-1).toPrecision();
      break;
    default:
      return { total, next, operation };
  }
  return { total, next: '', operation: '=' };
};

export default operate;
