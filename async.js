function sayBye() {
  console.log("Goodbye!");
}
greetUser("Azhan", sayBye);
function greetUser(name, callback) {
  console.log("Hello " + name);
  callback();
}
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched from server!");
    callback();
  }, 2000);
}

function displayData() {
  console.log("Displaying data to the user...");
}

fetchData(displayData);
let myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data loaded successfully!");
  } else {
    reject("Error while loading data.");
  }
});

myPromise
  .then(result => {
    console.log(result); // if success
  })
  .catch(error => {
    console.log(error); // if error
  }).finally( 
    console.log("finaly")
  );

function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data received!");
    }, 2000);
  });
}

async function showData() {
  console.log("Fetching...");
  const result = await getData();
  console.log(result);
}

showData();
function simulateNetworkRequest() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Success: Data received after 2s");
    }, 2000);
  });
}

async function runDemo() {
  console.log("Start fetching...");
  const response = await simulateNetworkRequest();
  console.log(response);
}

runDemo();




