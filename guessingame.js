let numberOfGuesses = 5
let minGuess = 1
let maxGuess = 20
let secret = Math.floor(Math.random() * (maxGuess - minGuess + 1)) + minGuess

//While loop
while (numberOfGuesses > 0) {
  let guess = parseInt(prompt("Please guess the secret number (1-20)"))
  numberOfGuesses--

  //Checking if the guess is correct
  if (guess === secret) {
    alert("Correct Guess!")
    break
  } else if (guess < secret) {
    alert("Sorry, incorrect guess")
  }
  //testing incorrect guess if its too low or too high
  else if (guess > secret) {
    alert("Incorrect, too high")
  } else if (guess < secret) {
    alert("Incorrect, too low")
  }
  //Making the secret number random
  let numbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
  ]
  let randomSecretNumber = numbers[Math.floor(Math.random) * numbers.length]

  //Ending the game
  if (numberOfGuesses === 0) {
    alert("The answer is " + secret)
  }
}