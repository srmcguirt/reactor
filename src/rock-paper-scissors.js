/* eslint-disable no-var */
// Time limit 45 minutes

// Write a function rockPaperScissors that takes a string('paper', 'rock', or 'scissors'),
// chooses randomly another string ('paper', 'rock', or 'scissors') and returns the result
// as a string of the outcome following the rules of Rock-Paper-Scissors.

// Rock Paper Scissors Rules:
// https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors

function rockPaperScissors(str) {
  var rng = Math.floor(Math.random() * 3)
  var result = ''

  var weapons = [
    { name: 'rock', beats: 'scissors', loses: 'paper' },
    { name: 'scissors', beats: 'paper', loses: 'rock' },
    { name: 'paper', beats: 'rock', loses: 'scissors' },
  ]
  var options = [weapons[0].name, weapons[1].name, weapons[2].name]
  var opponent = weapons.find(({ name }) => name === options[rng])
  var player = weapons.find(({ name }) => name === str)

  if (typeof str !== 'string')
    result = 'Received invalid input.'

  else if (player?.name === opponent?.name)
    result = `${player?.name} vs ${opponent?.name}: tie!`

  else if (player?.beats === opponent?.loses)
    result = `${player?.name} vs ${opponent?.name}: ${opponent?.name} wins!`

  else if (player?.loses === opponent?.beats)
    result = `${player?.name} vs ${opponent?.name}: ${player?.name} wins!`

  else
    result = 'Unacceptable weapon choice there partner. That weapon is only available in the DLC. Please select from the broad array of options given.'

  return result
}

console.log(rockPaperScissors('rock'))

for (let i = 0; i < 10; i++)
  rockPaperScissors('rock')
