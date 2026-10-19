let practiced = false;
let confident = false;
let preparationChosen = false;
let performanceChosen = false;

document.getElementById("practice").addEventListener("click", function() {
    practiced = true;
    preparationChosen = true;
    showResult()
});

document.getElementById("noPractice").addEventListener("click", function() {
    practiced = false;
    preparationChosen = true;
    showResult()
});

document.getElementById("confident").addEventListener("click", function() {
    confident = true;
    performanceChosen = true;
    showResult()
});

document.getElementById("nervous").addEventListener("click", function() {
    confident = false;
    performanceChosen = true;
    showResult()
});

function showResult() {
    if (preparationChosen === false || performanceChosen === false) {
        document.getElementById("result").innerHTML = " make both choices to see the result.";
    } else if (practiced === true && confident === true) {
        document.getElementById("result").innerHTML = "Congrats! You made the team! Your preparation and confidence paid off.";
    } else if (practiced === true || confident === true) {
        document.getElementById("result").innerHTML = "You got a call back! Judges see potential so keep working!";
    } else {
        document.getElementById("result").innerHTML = "Unfortunately, you didn't make the team. There's always next time!";

    }
}

document.getElementById("reset").addEventListener("click", function() {
    practiced = false;
    confident = false;
    preparationChosen = false;
    performanceChosen = false;
    document.getElementById("result").innerHTML = " make both choices to see the result.";
});