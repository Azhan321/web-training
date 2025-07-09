const prompt = require('prompt-sync')();

function calculator() {    
  let num1 = parseFloat(prompt("Enter the first number:"));
  let operator = prompt("Enter operator (+, -, *, /):");
  let num2 = parseFloat(prompt("Enter the second number:"));
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Error: Invalid number input.");
    return;
  }

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        alert("Error: Division by zero");
        return;
      }
      result = num1 / num2;
      break;
    default:
      alert("Error: Invalid operator");
      return;
  }

  console.log("Result: " + result);
}

calculator();

