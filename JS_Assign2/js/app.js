/*let numberOfBottles;
numberOfBottles = 10;

const line1 = 'green bottles hanging on the wall'
const line2 = 'and if one green bottle, should accidentally fall, there will be'

for (let i = numberOfBottles; i >= 0;  i -= 1)
{
  if (i === 10) {
    console.log(i);
    console.log(line1);
  }
  else {
    console.log(i);
    console.log(line1);
    console.log(line2);
  }
}
*/

/*
//Instruction 1

let speed = 72;
ms = speed * 1000 / 3600;
console.log(ms)

//Instruction 2
let minutes = 3;
sec = minutes * 60;
console.log(sec)


//Instruction 3
let x = 11;
let y = 4;
z = x/y
console.log(z)


//Instruction 4
x = 11;
y = 4;
z = x % y
console.log(z)

*/

/*
let int = 10
let textString = 'Hello World';

function myFirstFunction(i) {
  console.log(i);
}

myFirstFunction('Strong Word')
myFirstFunction(int)
myFirstFunction()


function myFirstFunction(a, b) {
  let z = a + b
  console.log(z);
}
myFirstFunction(2,5)


*/

/*
// Defining function and its input data (a and b)
function myFirstFunction(a, b) {
  //Input data a and b are used to make a numeric operation
  let z = a + b;
  //Return values
  return z;
}

//Defining a variable where we should save the returning value from the function
let results;

//Set returned output from the function variables to the result
results = myFirstFunction(7, 6);
//Print the output
console.log(results);
*/

//Operators - 1
function num(r) {
  let A = 3.14 * (r**2);
  return A;
}

let results;

results = num(2);
console.log(results);

//Operators - 2
function num1(a) {
  return -a;
}

let rlt;

rlt = num1(11)
console.log(rlt)

//Operators - 3
function bmi(w, h) {
  let calc = w / h;
  return calc;
}

let result;

result = bmi(70, 1.82)
console.log(result);

//Operator - 4
function hypot(a, b) {
  let c = (a**2) + (b**2);
  return Math.sqrt(c);
}

let rt;
rt = hypot(3, 4);
console.log(rt);

//Operator - 5
function minsec(num) {
  let min = Math.floor(num / 60);
  let sec = num % 60;
  return min + ' minute(s)' + ', '+ sec + ' second(s)';
}

let prt;

prt = minsec(111);
console.log(prt);

//

const string = 'Green bottles hanging on the wall';
let numberOfBottles = 10;
const string1 = 'And if one green bottle should accidentally fall, there will be ';

console.log(numberOfBottles + ' ' + string + '.' + ' ' + numberOfBottles + ' ' + string);
--numberOfBottles;

console.log(string1 + numberOfBottles);
