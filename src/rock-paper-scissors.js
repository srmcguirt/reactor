/* eslint-disable no-var */
// Time limit 45 minutes

// Write a function rockPaperScissors that takes a string('paper', 'rock', or 'scissors'),
// chooses randomly another string ('paper', 'rock', or 'scissors') and returns the result
// as a string of the outcome following the rules of Rock-Paper-Scissors.

// Rock Paper Scissors Rules:
// https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors

function rockPaperScissors(str) {
  var rng = Math.floor(Math.random() * 3)
  var table = [
    { option: 'rock', beats: 'scissors', loses: 'paper' },
    { option: 'scissors', beats: 'paper', loses: 'rock' },
    { option: 'paper', beats: 'rock', loses: 'scissors' },
  ]

  var opp = table[rng].option
  var result = (str) => {
    var choice = table.find((v, i) => table[i].option === str)
    console.log(choice)

    return choice
  }
  switch (str) {
    case 'paper':
      result(str)
      // logic
      break
    case 'rock':
    // logic
      break
    case 'scissors':
    // logic
      break
    default:
    // logic
      console.log(`Sorry, we got an invalid ${str}.`)
  }
}

rockPaperScissors('paper') // 'paper vs rock: paper wins!
rockPaperScissors('rock') // 'rock vs rock: tie!'
