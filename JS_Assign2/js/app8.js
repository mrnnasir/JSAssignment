const button1 = document.getElementById('btn');
const button2 = document.getElementById('btn1');
const wrapperRef = document.getElementById('wrapperDiv');

button1.addEventListener('click', (e) => {
  let tempInt = Number(age.value);

  if(checkAge(tempInt)) {
   let remove = document.getElementsByClassName('pClass');
   [...remove].forEach((el) => el.remove());
   createP('You are ' + tempInt + ' years old. Prepare yourself for adventure');
   rightLeft(right, left);
  }
  else {
    createP('You are too young')
  }
})

function checkAge(isAge) {
  return isAge >= 18;
}

function rightLeft(right, left) {
  let tempR = right.value;
  let tempL = left.value;
  createP('You are equipped with ' + tempR + ' in your right hand and ' + tempL + ' in your left hand');
}

function createP(string) {
  let tempChild = document.createElement('p');
  tempChild.textContent = string;
  tempChild.classList.add('pClass');
  wrapperRef.appendChild(tempChild);
}

button2.addEventListener('click', (e) => {
  let removeElement = document.getElementsByClassName('pClass');
  [...removeElement].forEach((el) => el.remove());
})
