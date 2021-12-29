var checkingText = document.getElementById('checkingText');
var checkingInput = document.getElementById('checkingInput');
var mainStuff = document.getElementById('mainStuff');
var scoreText = document.getElementById('scoreText');

var words = ["phone","green","books","test","twelve","garbage can","blanket","average","farts","bright","dark","flashlight","bark","cooking","running","eating","climbing","farting","drinking"];
var fontSizePX = 50;

var lowerBound = 1;
var upperBound = 50;

var score;
var aboutToEnd = false;

ShowWords();
function ShowWords() {
    var randomWords = words[Math.floor(Math.random() * words.length)] + " " + words[Math.floor(Math.random() * words.length)] + " " + words[Math.floor(Math.random() * words.length)];

    checkingText.innerHTML = randomWords;
    checkingText.style.fontSize = fontSizePX + "px";
    console.log(lowerBound + " " + upperBound + " " + checkingText.style.fontSize);
}

function CheckWords(originalWords) {
    if(originalWords == checkingInput.value) {
        fontSizePX = Math.round(fontSizePX / 2);
        upperBound = fontSizePX;

        if(aboutToEnd) {
            score = Math.round(100 / (fontSizePX * 2) * 100);
            console.log("yes");
            FinishedGame(score);
        }
    }
    else {
        fontSizePX += 1;
        lowerBound = upperBound
        upperBound = fontSizePX;
    }

    if(lowerBound == upperBound - 1) {
        fontSizePX = upperBound;
        aboutToEnd = true;
    }

    checkingInput.value = "";
    ShowWords();
}

function FinishedGame(score) {
    mainStuff.style.display = "none";
    scoreText.innerHTML = "Score: " + score;
}