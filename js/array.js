// let numbers = [10, 50, 25, 100, 60];
// let largest = numbers[0]; // assume first is largest

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > largest) {
//     largest = numbers[i];
//   }
// }

console.log("Largest number is:", largest); // 100
let numbers = [0,2, 7, 4, 9, 12, 5];
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenCount++;
  }else{
    oddCount++;
  }
}

console.log("Even numbers count:", evenCount);
console.log("Odd numbers count:", oddCount);