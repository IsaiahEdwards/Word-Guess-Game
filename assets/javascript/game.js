
//Possible words//
var words =  [
    "handicapped",
    "pronunciation",
    "highschool",
    "videogames",
    "lisandra",
    "bootcamp",
    "friendship"
];

var playAgain = document.getElementById("reset");

var answer = "";
var lose = 7;
var tries = 0;
var guessed =  [ ];
var wins = 0;
wordStatus = null;

var triesText = document.getElementById("tries");

//function for random word//
function word(){
    answer = words[Math.floor(Math.random() * words.length)];
}

//---keyboard----copied//
function generateButtons() {
    let keyboard = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `
        <button
          class="btn btn-lg btn-primary m-2"
          id='` + letter + `'
          onClick="handleGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');
  
    document.getElementById('keyboard').innerHTML = keyboard;
  }
  //guess letter copied//
  function handleGuess(chosenLetter){
      guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
      document.getElementById(chosenLetter).setAttribute('disabled', true);
      
      if (answer.indexOf(chosenLetter) >= 0){
          guessedWord();
          checkWin()    
      }     
      else {
        tries++;
        document.getElementById("tries").innerHTML = tries;
        checkLose();
        checkWin();
        hangmanPicture();
    }
  }
  function hangmanPicture(){
  document.getElementById("hangman").src = "assets/images/hangman" + tries + ".png";
  }

//check if win or lose//
  function checkWin(){
    if (wordStatus === answer) {
      document.getElementById("keyboard").innerHTML = 'You Won!!!';
      wins++;
      document.getElementById("wins").innerHTML = wins;
      document.getElementById("hangman").src = "assets/images/hangmanWin.png";
    }
  }
  function checkLose(){
    if (tries === lose){
        document.getElementById("keyboard").innerHTML = "YOU LOSE!";
        document.getElementById("wordhidden").innerHTML = "the correct word was " + answer;
        
    }
}

//lose count//

document.getElementById("lose").innerHTML = lose;

function guessedWord(){
    wordStatus = answer.split("").map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById("wordhidden").innerHTML = wordStatus;
}

// updating tries//
function updateTries() {
    document.getElementById('tries').innerHTML = tries;
  }


  //reset//
function reset(){
    
    guessed = [];
    document.getElementById("hangman").src = "assets/images/hangman0.png";
    tries = 0;
    
    word();
    guessedWord();
    updateTries();
    generateButtons();
  }
//run functions//
generateButtons();
word();
guessedWord()





