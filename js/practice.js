const numbers = [1, 2, 3];
const doubled = [];

for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}
console.log(doubled); // [2, 4, 6]

// Declarative programming

const num = [2,4,8];
const triple = num.map(num=>num*3);
console.log(triple);

// Synchronous programmng

console.log("Start");
console.log("Middle");
console.log("End");

// asynchronous programming

console.log("pahle");
setTimeout(()=>{
    console.log("bad mai")
},3000);

function stepOne() {
  console.log("1. Start washing clothes");
}

function stepTwo() {
  console.log("2. Rinse clothes");
}

function stepThree() {
  console.log("3. Dry clothes");
}

stepOne();
stepTwo();
stepThree();

// Output:
// 1. Start washing clothes
// 2. Rinse clothes
// 3. Dry clothes
function stepOne() {
  console.log("1. Start washing clothes");
}

function stepTwo() {
  setTimeout(() => {
    console.log("2. Rinse clothes (after 3 seconds)");
  }, 3000);
}

function stepThree() {
  console.log("3. Dry clothes");
}

stepOne();
stepTwo();
stepThree();

const numbeers = [4, 5, 6, 7, 8];
const evenNumbers = [];

for (let i = 0; i < numbeers.length; i++) {
  if (numbeers[i] % 2 === 0) {
    evenNumbers.push(numbeers[i]);
  }
}

// console.log(evenNumbers); // [4, 6, 8]

// const decnum = [1,2,3,4,5,6];
// const even = decnum.map(decnum.)
