var numbers = [3, 56, 2, 48, 5];

// (1) Map -Create a new array by doing something with each item in an array.
function double(x) {
  return x * 2;
}

var newNumbers = numbers.map(double);
console.log(newNumbers);

// 아래의 코드를 위와 같이 map 함수를 이용하여 간단하게 축약할 수 있다.
// var newNumbers = [];
// numbers.forEach(function (x) { newNumbers.push(x * 2); });

// (2) Filter - Create a new array by keeping the items that return true.
var newNumbers = numbers.filter(function (num) {
  return num < 10; // 10 미만인 숫자만 필터
});
console.log(newNumbers);

// 아래의 코드를 위와 같이 filter 함수를 이용하여 간단하게 축약할 수 있다.
// var newNumbers = [];
// numbers.forEach(function(num) {
//     if (num < 10) {
//         newNumbers.push(num);
//     }
// })

// (3) Reduce - Accumulate a value by doing something to each item in an array.
var newNumbers = numbers.reduce(function (accumulator, currentNumber) {
  console.log("accumulator = " + accumulator);
  console.log("currentNumber = " + currentNumber);
  return accumulator + currentNumber;
});
console.log(newNumbers);

// 아래의 코드를 위와 같이 reduce 함수를 이용하여 간단하게 축약할 수 있다.
// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber;
// });

// (4) Find - find the first item that matches from an array.
var newNumber = numbers.find(function (num) {
  return num > 10;
});
console.log(newNumber); // 조건에 부합하는 첫번째 값만 출력

// (5) FindIndex - find the index of the first item that matches.
var foundIndex = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(foundIndex);
