/*
//For loop

const string = 'Green bottles hanging on the wall';
let numberOfBottles = 10;
const string1 = 'And if one green bottle should accidentally fall, there will be ';

for(let i = numberOfBottles; i>0 ; i--) {
  if (i != numberOfBottles) {
    console.log(string1 +i + string);
  }
  console.log(i + string +'. '+ i +string)
}

*/

//Bollean

/*
let bool = true
console.log(bool);
console.log(!bool);

const age = 24;
const birthyear = 2002;

console.log(age == 24 || birthyear == 2001);
*/

//

/*
let bool = true
console.log(bool);
console.log(!bool);

const age = 24;
const birthyear = 2002;
let condition = age == 26 || birthyear == 2002;

console.log(condition);
function getAge() {
  return age;
}

let ages = getAge();
console.log(ages);
let results = getAge();

results = 26
console.log(results);

*/

//
/*
const birthYear = 1990;
const today = new Date();
console.log(today.getFullYear());

const age = today.getFullYear() - birthYear;
console.log(age);

let isChild = age <= 10;
let isTeenager = age >= 11 && age <= 17;
let isAdult = age >= 18;

console.log('You are a child: '+ isChild);
console.log('You are a teenager: '+ isTeenager);
console.log('You are a adult: '+ isAdult);

if (isChild) {
  console.log('This is a child');
}
else if (isTeenager) {
  console.log('This is a teenager');
}
else
{
  console.log('This is an adult');
}
*/

//
/*
const str = true; //If false is used, it will not print anything
if(str) {
  console.log('Hello World');
}

 */

//
/*
const age = 18;
if(age != 18) {
  console.log('You can buy toys');
}
else if(age != 22 && age != 18) {
  console.log('You can buy toys');
}
else if(age != 27 && age != 18 && age != 22) {
  console.log('You can buy toys');
}
else
{
  console.log('You cannot buy toys');
}

*/


// Ternary if
/*
const age = 18
const month = 30
let button = false

if(button == true) {
  console.log('Clicked')
}
else
{
  console.log('Not clicked')
}

//let clicked = age > 18? console.log('Ternary clicked') : console.log('Ternary not clicked');
let clicked = age > 18 && button == true? console.log('Ternary clicked') : console.log('Ternary not clicked');

 */

//

/*
let birthYear = 2000;
let favoriteNumber = 30;
let today = new Date();
let age = today.getFullYear() - birthYear;

console.log(age);

let rlt1 = age > 17 && age>=0? console.log('You are an adult') :
  age<0? console.log('This is not a valid age'):
    console.log('You are not an adult');
let rlt2 = favoriteNumber % 2 == 0? console.log('Your favorite number is an even number') :
  console.log('Your favorite number is an odd number');
let rlt3 = age > favoriteNumber? console.log('The greater number is: ' + age) :
  console.log('The greater number is: ' + favoriteNumber);

 */

// Functions

/*
function makeLasagna() {
  console.log("Fry meat.");
  console.log("Cut onions.");
  console.log("Fry onions.");
  console.log("Add tomato sauce.");
  console.log("Add spices.");
  console.log("Boil.");
}
makeLasagna();
let isHungry = true;

console.log("Time for breakfast." );
if(isHungry) {
  makeLasagna();
}

console.log("Time for lunch.");
if(isHungry) {
  makeLasagna();
}

 */

//

/*
function moveForward(steps) {
  for (let i = 0; i < steps; i++) {
    console.log("Move Forward.");
  }
}

function turnRight() {
  console.log("Turn Right.");
}

function turnAround() {
  turnRight();
  turnRight();
}

function turnLeft() {
  turnRight();
  turnRight();
  turnRight();
}

// Program execution
moveForward(3);     // walk 3 steps
turnAround();
moveForward(3);     // walk 3 steps
turnLeft();
moveForward(3);     // walk 3 steps
turnLeft();
moveForward(1);     // walk 1 step
turnAround();
moveForward(1);     // walk 1 step

 */

//

/*
function getBankAccountBalance() {
  return -500;
}

console.log(getBankAccountBalance());

let amIBroke = getBankAccountBalance() <= 0;
console.log(amIBroke)

const salary = 600;
let newBankAccountBalance = getBankAccountBalance() + salary;
console.log(newBankAccountBalance);

 */

//

/*
function sayHi() {
  console.log("Hi!")
}
sayHi(); // Output: Hi!

function doubleNumber(numberToDouble) {
  console.log(numberToDouble *= 2);
}

doubleNumber(4); // Output: 8
doubleNumber(-2); // Output: -4
doubleNumber(10); // Output: 100

 */

//

/*
function add(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}
add(1, 2); // Output: 3

 */

//
/*
function doubleNumber(numberToDouble) {
  console.log(numberToDouble *= 2);
}
doubleNumber(4); // Output: 8

 */

//
/*
function doubleNumber(numberToDouble) {
  return numberToDouble * 2;
}

console.log(doubleNumber(-1)); // Output: -2
console.log(doubleNumber(5)); // Output: 10
console.log(doubleNumber(8)); // Output: 16

 */

// List
/*
let listExample = [1, 2, 1, 3, 9, 4, 7];
console.log(listExample[0]);
console.log(listExample);

 */

//
/*
let listExample = [1, 2, 1, 3, 9, 4, 7, 'test'];
listExample.forEach(item => console.log(item));

 */

//

let list = ['Move forward', 'Turn right'];

function mForward(steps) {
  for (let i = 0; i < steps; i++) {
    console.log(list[0]);
  }
}
mForward(3);

function turnAround(steps) {
  for (let i = 0; i < steps; i++) {
    console.log(list[1]);
  }
}
turnAround(2)
mForward(3)

function turnLeft(steps) {
  for (let i = 0; i < steps; i++) {
    console.log(list[1]);
  }
}
turnLeft(3)
mForward(3)
turnLeft(3)
mForward(1)
turnAround(2)
mForward(1)

