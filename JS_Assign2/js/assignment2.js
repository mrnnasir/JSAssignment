//Assignment Part-1 ------------------------------------------------------------------

const playerName = 'Raihan'
const playerAge = 45
const rightHand = true
const leftHand = true

function checkEligibility(age) {
  if (playerAge < 12)
    return 'Too young to start the adventure'
  else
    return 'You are ready for the quest'
}

function chooseEquipment(rightHand, leftHand) {
  let rightWeapon = 'Sword'
  let leftWeapon = 'Shield'

  if (rightHand && leftHand) {
    return 'You are armed with a ' + rightWeapon + ' and ' + leftWeapon + '!'
  }
  else if (rightHand) {
    return 'You only have a ' + rightWeapon
  }
  else if (leftHand) {
    return 'You only have a ' + leftWeapon
  }
  else {
   return 'You are unarmed! Be careful!'
  }
}

let findTheGame;

if (playerAge < 12) {
  findTheGame = 'You start in your house'
}
else if (playerAge>= 12 && playerAge<=17) {
  findTheGame = 'You start in beginners forest'
}
else {
  findTheGame = 'You start in a dark dungeon'
}

console.log('Welcome, ' + playerName + '!')
console.log(checkEligibility(14))
console.log(findTheGame)
console.log(chooseEquipment(rightHand, leftHand) + '\n')

//Bonus part-1---------

let diceNum= [1,2,3,4,5,6]

function rollDice() {
  let randomDigit = Math.floor(Math.random() * diceNum.length)
  if (diceNum[randomDigit] === 5) {
    return 'You rolled ' + diceNum[randomDigit] + '.' + 'A monster appears'
  }
  else if (diceNum[randomDigit] < 5) {
    return 'You rolled ' + diceNum[randomDigit] + '.' +'Prepare yourself for action'
  }
  else {
    return 'You rolled ' + diceNum[randomDigit] + '.' +'You have destroyed the monster'
  }
}
console.log(rollDice() + '\n')

//Assignment Part-2 ------------------------------------------------------------------

const customerName = 'Raihan'
const customerAge = 15
const hasCash = true
const hasCard = true
const paymentType = ['Cash', 'Card']

function ageValidation(age) {
  if (customerAge < 12) {
    return 'Too young for coffee, maybe try hot chocolate'
  }
  else {
    return 'You can order coffee!'
  }
}

function paymentOption() {
  let randomPaymentType = Math.floor(Math.random() * paymentType.length)
  let cashPay, cardPay;

  if (randomPaymentType === 0 && hasCash) {
    cashPay = paymentType[randomPaymentType]
    return 'You paid with ' + cashPay
  } else if (randomPaymentType === 1 && hasCard) {
    cardPay = paymentType[randomPaymentType]
    return 'You paid with ' + cardPay
  }

}

let orderType;

if (customerAge < 12) {
  orderType = 'Here is your hot chocolate'
}
else if (customerAge>= 12 && customerAge <=17) {
  orderType = 'Here is your small latte'
}
else {
  orderType = 'Here is your large cappuccino'
}

console.log('Welcome, ' + customerName + '!')
console.log(ageValidation(customerAge))
console.log(paymentOption())
console.log(orderType + '\n')

//Bonus part-2---------

let diceNumber= [1,2,3,4,5,6]

function diceRoll() {
  let randomNumber = Math.floor(Math.random() * diceNum.length)
  if (diceNumber[randomNumber] === 6) {
    return 'You rolled ' + diceNumber[randomNumber] + '. ' + 'You get a free muffin with your coffee!'
  }
  else {
    return 'You rolled ' + diceNumber[randomNumber] + '. ' + 'No extras today, enjoy your drink!'
  }
}
console.log(diceRoll() + '\n')
