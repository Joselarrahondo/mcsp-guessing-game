let history = {}
function YouDidIt(numGuesses, UserName){
  let prevAttempts = history[UserName];
  let diffence = prevAttempts - numGuesses;
  if(diffence < 0){
    alert(`That's Correct ${UserName}! You did better in your last game by ${Math.abs(diffence)} fewer guesses.`);
  }else if(diffence > 0) {
    alert(`That's Correct ${UserName}! and you beat your previous attempt by ${Math.abs(diffence)} fewer guesses.`);
  } else {
    alert(`That's Correct ${UserName}! You tied your previous attempt`);
  }
}


function play() {
let numGuesses = 1;
let UserName = prompt("Enter name to start");
let secretNumber =  Math.floor(Math.random()* 5) + 1;


while(true) {
  let guess = Number(prompt(" Guess a number "));
  if(guess === null){
    alert("Cheater");
    break;
  }
  
  let numGuess = Number(guess);
  
  if(Number.isNaN(numGuess)) {
    alert("Please enter a number");
  } else if(numGuess < secretNumber) { 
    numGuesses++
    alert(`Sorry ${UserName}, guess higher`);
  }else if(numGuess > secretNumber) {
    numGuesses++;
    alert(`Sorry ${UserGuess}, guess lower`)
  }else {
    
    if(!history.hasOwnProperty(UserName)) {
      alert(`Correct! It took you ${numGuesses} guesses. `);
  
    }else {
    YouDidIt(numGuesses, UserName)
  }
     
      history[UserName] = numGuesses;
      let playAgain = prompt("Try again");
      if(playAgain.toLowerCase() === "yes") {
       play();
    } else {
        break;
      } 
    }   
   }
}

play();
    

