import Big from 'big';

const operate = (numberOne, numberTwo, operation) => {
  const number1 = new Big(numberOne);
  const number2 = new Big(numberTwo);

  switch (operation) {
    case '+':
      return number1.plus(number2);

    case '-':
      return number1.minus(number2);

    case 'X':
      return number1.times(number2);

    case '÷':
      return number1.div(number2);

    case '%':
      return number1.times(0.01);

    case '+/-':
      return number1.times(-1);

    default:
      return 'ERROR';
  }
};

export default operate;
