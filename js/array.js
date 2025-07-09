let numbers = [10, 50, 25, 100, 60];
let largest = numbers[0]; // assume first is largest

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log("Largest number is:", largest); // 100
