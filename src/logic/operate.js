import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  // Big.DP = 40;
  // console.log('operate -> numberOne', numberOne);
  // let total = new Big(parseInt(numberOne, 10));
  // console.log('operate -> total11', total.toString());
  // const next = new Big(parseInt(numberTwo, 10));

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
