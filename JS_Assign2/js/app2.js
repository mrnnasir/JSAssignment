// Function - 1
/*
function numToMultiply(num) {
  return num * num;
}

console.log(numToMultiply(4));

 */

// Function -2
/*
function avgOfNumbers(num1, num2) {
  return (num1 * num2) / 2;
}

console.log(avgOfNumbers(2, 6));

 */

// Function -3
/*
function jointStrings(str1, str2) {
  return 'Welcome'+ ' ' + str1 + ' ' + str2;
}

console.log(jointStrings('Ben', 'Ting'))

 */

// Function -4
/*
function randomNum(times) {
  for( let i= 0; i<times; i++){
    console.log(Math.floor(Math.random() * 3));
  }
}
randomNum(5);

 */

// Function -5
/*
let list = ['A', 'B', 'C'];

function capLetter(num) {
  return list[num];
}

console.log(capLetter(0));

 */

// Function - 6
function compareNumbers(a, b) {
  if (a === b) return 'Both numbers are equal!';
  if (a > b) return 'First number is greater!';
  if (a < b) return 'Second number is greater!';
}
console.log(compareNumbers(2,2))
