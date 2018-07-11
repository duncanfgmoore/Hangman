// reference DOM elements
document.addEventListener("DOMContentLoaded", function () {


    var $newGameButton = document.getElementById("newgame");
    var $placeholders = document.getElementById("answerarea");
    var $guessedLetters = document.getElementById("wrongguess");
    var $guessesLeft = document.getElementById("guessesleft");
    var $wins = document.getElementById("wins");
    var $losses = document.getElementById("losses");


    //create variables

    var wordBank = ['B R U I N S', 'P A N T H E R S', 'D E V I L S', 'F L Y E R S',
         'W I L D', 'B L U E S', 'J E T S', 'S A B R E S', 'C A N A D I E N S',
        'D U C K S', 'F L A M E S', 'O I L E R S', 'K I N G S', 'S E N A T O R S', 'L I G H T N I N G',
         'H U R R I C A N E S',  'R A N G E R S', 'I S L A N D E R S',
        'P E N G U I N S', 'C A P I T A L S', 'B L A C K H A W K S', 'A V A L A N C H E',
        'S T A R S', 'C O Y O T E S', 'S H A R K S', 'C A N U C K S'];

    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var gameRunning = false;
    var pickedWord = '';
    var pickedWordPlaceholderArr = [];
    var guessedLetterBank = [];
    var incorrectLetterBank = [];

    // function to start a new game

    function newGame() {
        
        gameRunning = true;
        guessesLeft = 9;
        guessedLetterBank = [];
        incorrectLetterBank = [];
        pickedWordPlaceholderArr = [];

        pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

        // creating placeholders of new word
        for (var i = 0; i < pickedWord.length; i++) {
            if (pickedWord[i] === ' ') {
                pickedWordPlaceholderArr.push(' ');
            } else {
                pickedWordPlaceholderArr.push('_');
            }
        }

        // writing things on the user screen
        $guessesLeft.textContent = guessesLeft;
        $placeholders.textContent = pickedWordPlaceholderArr.join('');
        $guessedLetters.textContent = incorrectLetterBank;
    }

    // the letters that were guessed
    function letterGuess(letter) {
        console.log(letter);

        if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1) {
            //running our game
            guessedLetterBank.push(letter);

            // check if guessed letter is good
            for (var i = 0; i < pickedWord.length; i++) {
                //converting letters to lower case
                if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
                    // if good switches out placeholder for letter
                    pickedWordPlaceholderArr[i] = pickedWord[i];
                }
            }

            $placeholders.textContent = pickedWordPlaceholderArr.join('');
            // pass letter into our checkIncorrect function
            checkIncorrect(letter);
        }
        else {
            if (!gameRunning) {
                alert("Press New Game Button to Start!");
            } else {
                alert("You have already guessed that letter.");
            }
        }
    }
    //check for incorrect guesses
    function checkIncorrect(letter) {
        //check to see if letter didn't make it into out placeholder
        if (
            pickedWordPlaceholderArr.indexOf(letter.toLowerCase()) === -1
            &&
            pickedWordPlaceholderArr.indexOf(letter.toUpperCase()) === -1
        ) {
            guessesLeft--;
            //add incorrect letter to incorrect letter bank
            incorrectLetterBank.push(letter.toUpperCase());
            $guessedLetters.textContent = incorrectLetterBank.join(' ');
            // write new amount of guesses left to DOM
            $guessesLeft.textContent = guessesLeft;
        }
        checkLoss();
    }
    //checklose
        function checkLoss() {
            if (guessesLeft === 0) {
                losses++;
                gameRunning = false;
                $losses.textContent = losses;
            }
            checkWin();
        }
    //checks win

    function checkWin() {
        if (pickedWord.toLowerCase() === pickedWordPlaceholderArr.join('').toLowerCase()) {
            wins++;
            gameRunning = false;
            $wins.textContent = wins;
            alert("You Win!")
        }
    }
    // add events listener for new game
  
    $newGameButton.addEventListener('click', newGame);
   
    //add onkeyup even to trigger letterGuess

    document.onkeyup = function (event) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            letterGuess(event.key);
        }
    }

});


























