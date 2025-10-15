/*function testFunction(inoutParam) {
  console.log(inoutParam);
}

const string = 'Hello World!';

testFunction(string)

 */

/*
//Create a reference to HTML element with ID 'wrapperDiv'
let refDiv = document.getElementById("wrapperDiv");
//Create a p tag HTML element
let temPara = document.createElement("p");

temPara.textContent = 'Hello World';
temPara.classList.add('pClass');
document.body.appendChild(temPara);

 */

const fruits = ['Apple', 'Banana', 'Cherry', 'Mango'];
const divWrapper = document.getElementById('wrapperDiv');

const ulTemp = document.createElement('ul')
fruits.forEach((fruit) => {
  let liTemp = document.createElement('li');
  liTemp.textContent = fruit;
  ulTemp.appendChild(liTemp);
})

divWrapper.appendChild(ulTemp);
