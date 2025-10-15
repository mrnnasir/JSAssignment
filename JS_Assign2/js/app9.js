const age = document.getElementById('age');
const right = document.getElementById('rightIn');
const left = document.getElementById('leftIn');
const button = document.getElementById('btn');
let result = document.getElementById('result');

function rightLeft(right, left, rCh, lCh){
  let tempR = right.value;
  let tempL = left.value;

  if(rCh && lCh) {
    createP('You are equipped with ' + tempR + ' in your right hand and ' + tempL + ' in your left hand.');
  }
  else if(rCh) {
    createP('You are equipped with ' + tempR + ' in your right hand only.');
  }
  else if(lCh) {
    createP('You are equipped with ' + lCh + ' in your left hand only.');
  }
  else {
    createP('You are unarmed. Run & Hide!');
  }
}

function createP(string){
  let tempChild = document.createElement('p')
  tempChild.textContent = string
  tempChild.classList.add('pClass');
  result.appendChild(tempChild);
}

function ageCheck(pAge) {
  return pAge >= 18; //It checks if entered number in tempAge is greater or equal to 18. If not, it returns False.
}

button.addEventListener('click', () => {
  let tempAge = Number(age.value);
  let rightCh = document.getElementById('rightChecked').checked;
  let leftCh = document.getElementById('leftChecked').checked;


  if(ageCheck(tempAge)){
    let remove = document.getElementsByClassName('pClass');
    [...remove].forEach(el => el.remove());
    createP('You are ' + tempAge + ' years old. Prepare for adventure!')
    rightLeft(right, left, rightCh, leftCh);
  }
  else {
    createP('You are ' + tempAge + ' years old. You are too young to play this game');
  }
})
