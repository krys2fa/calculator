import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let total = new Big(parseInt(numberOne, 10));
  const next = new Big(parseInt(numberTwo, 10));

  switch (operation) {
    case '+':
      total = total.plus(next).toPrecision();
      break;
    case '-':
      total = total.minus(next).toPrecision();
      break;
    case 'X':
      total = total.times(next).toFixed(0);
      break;
    case '÷':
      Big.DP = 2;
      total = total.div(next).toPrecision();
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
