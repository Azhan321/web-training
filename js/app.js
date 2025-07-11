// const prompt = require('prompt-sync')();

// function calculator() {    
//   let num1 = parseFloat(prompt("Enter the first number:"));
//   let operator = prompt("Enter operator (+, -, *, /):");
//   let num2 = parseFloat(prompt("Enter the second number:"));
//   let result;

//   if (isNaN(num1) || isNaN(num2)) {
//     alert("Error: Invalid number input.");
//     return;
//   }

//   switch (operator) {
//     case '+':
//       result = num1 + num2;
//       break;
//     case '-':
//       result = num1 - num2;
//       break;
//     case '*':
//       result = num1 * num2;
//       break;
//     case '/':
//       if (num2 === 0) {
//         alert("Error: Division by zero");
//         return;
//       }
//       result = num1 / num2;
//       break;
//     default:
//       alert("Error: Invalid operator");
//       return;
//   }

//   console.log("Result: " + result);
// }

// calculator();

// Function EXpression
const hello = function(){
  console.log("code is offunction expression")
}
hello();

// Function parameter
function jama(a,b,c){
  return a*b*c;
}
console.log(jama(2,3,4));

// Default parameters
function def(a=10,b=90){
  return a+b;
}
console.log(def());
function greet(name ="guest"){
  console.log("hello",name)
}
greet();
greet("azhan");
//  Function constructor
const sum = Function("a","b","return a+b");
console.log(sum(10,20));
// Call function
const user ={name:"azhan",age:21}
function yt(){
  console.log("hi",this.name,"age is",this.age)
}
yt.call(user);

// apply function()

function app(city,country){
  console.log(this.name + "from"+ city +","+ country)
}
const you={name:"azhan"}
app.apply(you,["sahiwl","pakistan"]);
// binffunction

function intro() {
  console.log("Hello", this.name);
}
const person = { name: "Zara" };
const introZara = intro.bind(person);
introZara();
