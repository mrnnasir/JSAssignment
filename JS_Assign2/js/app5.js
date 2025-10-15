const fruits = ['Apple', 'Banana', 'Cherry', 'Mango', 'Pineapple'];
const button = document.getElementById('btn2')

button.addEventListener('click', () => {
  txt.innerHTML = 'Available fruits are : - '

  const divWrapper = document.getElementById('wrapperDiv');
  const ulTemp = document.createElement('ul')
  fruits.forEach((fruit) => {
    let liTemp = document.createElement('li');
    liTemp.textContent = fruit;
    ulTemp.appendChild(liTemp);
  })
divWrapper.appendChild(ulTemp)
})
