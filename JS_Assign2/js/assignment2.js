//Assignment part-1
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
console.log(checkEligibility(playerAge))
console.log(findTheGame)
console.log(chooseEquipment(rightHand, leftHand))

//Bonus part
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
console.log(rollDice())
