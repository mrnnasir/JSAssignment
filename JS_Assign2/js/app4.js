const button = document.getElementById('btn1')

button.addEventListener('click', () => {
  text1.innerHTML = 'How are you guys doing?'

    let refDiv = document.getElementById('div1')
    let tempPara = document.createElement("p");
  tempPara.textContent = 'Hello World!';
  tempPara.classList.add('pClass');
  document.body.appendChild(tempPara);
  }
)
