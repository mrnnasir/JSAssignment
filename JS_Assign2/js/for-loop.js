/*
let intExp = 10

for(let i = intExp; i >= 0; i--) {
  console.log(i);
}

 */

//Exercises---

//1
/*
const num = 13;

for (let i = 0 ; i < num; i++) {
  randNum = Math.floor(Math.random()*6);
  console.log(randNum);
}

 */

//2
/*
for (let i = 1 ; i <= 1024; i*=2) {
  //num <= 1024 → loop continues as long as the number is ≤ 1024
  //num *= 2 → multiply the number by 2 after each iteration
  console.log(i);
}

 */

//3
/*
for (let i = 10 ; i >=1; i--) {
  console.log(i);
}

 */

//4
/*
function numPow(num1, num2) {
  let sum = 1;
  for (let i = 1; i <= num2; i++) {
    sum *= num1;
  }
  return sum;
}
console.log(numPow(4, 24));

 */

//Example
/*
const listEx = [1, 1, 2, 3, 5, 8];
listEx[1] = 1;
//console.log(listEx);
listEx.forEach(element => console.log(listEx));
  //This is an arrow function that runs for each element.
  //The parameter element receives each item of the array (e.g., 1, then 2, then 3).
  //But inside the function, you’re not using element — instead, you log the whole array listEx.

 */

const listNum = [];

for (let i = 0; i < 10000; i++) {
  const roll = Math.round(Math.random() * 10)  //or, Math.floor(Math.random() * 11);
  listNum.push(roll);
}

for (let i = 0; i <= 10; i++) {
  let sumRes = 0;
  for (let j = 0; j < listNum.length; j++) {
    if (i === listNum[j]) {
      sumRes++
    }
  }
  console.log(i + ' - has occured - ' + sumRes + ' times.');
}
