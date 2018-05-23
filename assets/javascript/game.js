
// Array of the possible words computer can select and letters usable

var teams = ["Bruins", "Sabres", "Red Wings", "Panthers", "Canadiens", "Senators", "Lightning", "Maple Leafs",
 "Hurricanes", "Blue Jackets", "Devils", "Islanders", "Rangers", "Flyers",
"Penguins", "Capitals", "Blackhawks", "Avalanche","Stars", "Wild", "Preators", "Blues", "Jets",
"Ducks", "Coyotes", "Flames", "Oilers", "Kings", "Sharks", "Canucks", "Golden Knights"];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Selects a random word from the array

var rand = Math.floor(Math.random() * teams.length);

var rightWord = [];
var wrongWord = [];

// list of variables being used
var choosenWord = teams[rand];


// This replaces the letters with underscores


var underScore = [];

console.log(choosenWord);


var generateUnderScore = () => {

    for (var i = 0; i < choosenWord.length; i++) {
                underScore.push("_");
    }
    
    return underScore;
}
console.log(generateUnderScore());

//get users guess

document.addEventListener('keypress', (event) => {

    var keycode = event.keyCode;
    var keyword = String.fromCharCode(event.keyCode);
    console.log(choosenWord.indexOf(keyword));
//if users guess is right
    if (choosenWord.indexOf(keyword) > -1) {
        rightWord.push(keyword);
// Where the letter will be replacing the underscore
        underScore[choosenWord.indexOf(keyword)] = keyword;
        if (underScore.join('') == choosenWord) {
            alert("you win");
        }
        console.log(rightWord);
    } else {
        wrongWord.push(keyword);
        console.log(wrongWord);
    }


});


// check if the guess is right




