// Generate the random number

$(document).ready(function() {
    var randomNum = Math.floor(Math.random()*100+10)
    console.log(randomNum);

//Displaying the random number

$('#matchScore').text(randomNum);

//Generate the random numbers for each of the crystals

Array.prototype.shuffle = function() {
    var input = this;

    for (var i = input.length-1; i >=0; i--){
        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
   }

var tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
tempArray.shuffle();

console.log(tempArray);


var rubyCrystal = tempArray[0];
var amythestCrystal = tempArray[1];
var emeraldCrystal = tempArray[2];
var diamondCrystal = tempArray[3];

// Wins, losses, and total variables

var totalCalc = 0;
var wins = 0;
var losses = 0;

$('#wins').text(wins);
$('#losses').text(losses);


// If you win function

function winner () {
    alert ("You are a winner, this time...");
    wins ++;
    $('#wins').text(wins);
    reset();
}

function loser () {
    alert ("Better luck next time!");
    losses ++;
    $('#losses').text(losses);
    reset();
}

// Reset Game

function reset () {
    randomNum = Math.floor(Math.random()*100+1);
    console.log(randomNum)
    $('#matchScore').text(randomNum);
    Array.prototype.shuffle = function() {
        var input = this;
    
        for (var i = input.length-1; i >=0; i--){
            var randomIndex = Math.floor(Math.random()*(i+1));
            var itemAtIndex = input[randomIndex];
    
            input[randomIndex] = input[i];
            input[i] = itemAtIndex;
        }
       }
    
    var tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    tempArray.shuffle();
    
    console.log(tempArray);
    rubyCrystal = tempArray[0];
    console.log(rubyCrystal);
    amythestCrystal = tempArray[1];
    console.log(amythestCrystal);
    emeraldCrystal = tempArray[2];
    console.log(emeraldCrystal);
    diamondCrystal = tempArray[3];
    console.log(diamondCrystal);
    totalCalc = 0;
    $('#totalScore').text(totalCalc);
}

// Clicking on the Crystals

$('.ruby').on('click', function() {
    totalCalc = totalCalc + rubyCrystal;
    console.log("New Total = " + totalCalc);
    $("#totalScore").text(totalCalc);
    if (totalCalc === randomNum) {
        winner ();
    }
    else if (totalCalc > randomNum){
        loser ();
    }
});

$('.amythest').on('click', function() {
    totalCalc = totalCalc + amythestCrystal;
    console.log("New Total = " + totalCalc);
    $("#totalScore").text(totalCalc);
    if (totalCalc === randomNum) {
        winner ();
    }
    else if (totalCalc > randomNum){
        loser ();
    }
});

$('.emerald').on('click', function() {
    totalCalc = totalCalc + emeraldCrystal;
    console.log("New Total = " + totalCalc);
    $("#totalScore").text(totalCalc);
    if (totalCalc === randomNum) {
        winner ();
    }
    else if (totalCalc > randomNum){
        loser ();
    }
});

$('.diamond').on('click', function() {
    totalCalc = totalCalc + diamondCrystal;
    console.log("New Total = " + totalCalc);
    $("#totalScore").text(totalCalc);
    if (totalCalc === randomNum) {
        winner ();
    }
    else if (totalCalc > randomNum){
        loser ();
    }
});

});