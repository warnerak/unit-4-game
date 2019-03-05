// Generate the random number

$(document).ready(function() {
    var randomNum = Math.floor(Math.random()*100+1)
    console.log(randomNum);

//Displaying the random number

$('#matchScore').text(randomNum);

//Generate the random numbers for each of the crystals

var rubyCrystal = Math.floor(Math.random());
var amythestCrystal = Math.floor(Math.random());
var emeraldCrystal = Math.floor(Math.random());
var diamondCrystal = Math.floor(Math.random());

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
    rubyCrystal = Math.floor(Math.random());
    console.log(rubyCrystal);
    amythestCrystal = Math.floor(Math.random());
    console.log(amythestCrystal);
    emeraldCrystal = Math.floor(Math.random());
    console.log(emeraldCrystal);
    diamondCrystal = Math.floor(Math.random());
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