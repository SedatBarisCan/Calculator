let firstNumber = null;
let secondNumber = null;
var operator = "";
var operateResult = '';

function addNum(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  function subtractNum(num1, num2) {
    let sum = num1 - num2;
    return sum;
  }
  
  function multiplyNum(num1, num2) {
    let sum = num1 * num2;
    return sum;
  }
  
  function divideNum(num1, num2) {
    let sum = num1 / num2;
    return sum;
  }
  
  function operate(num1, num2, oper) {
    if (oper === "+") {
      operateResult = addNum(num1, num2);
    } else if (oper === "-") {
      operateResult = subtractNum(num1, num2)      
    } else if (oper === "x") {
      operateResult = multiplyNum(num1, num2)
    } else if (oper === "/") {
      operateResult = divideNum(num1, num2)
    }
  }