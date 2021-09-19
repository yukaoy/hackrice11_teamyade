//changeFishImage(50);

//define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Special min var for fish func
let totalMinutes = 0;

// Define vars to hold display value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

// Define variable to hold stopwatch status
let clockStatus = 'stopped';

// Stopwatch function (logic to determine when to increment next value)
function stopWatch() {
    seconds++;

    // Logic to determine when to increment next value
    if (seconds / 60 == 1) {
        seconds = 0;
        minutes++;
        totalMinutes++;
        if (minutes / 60 == 1) {
            minutes = 0;
            hours++;
        }
    }

    changeFishImage(totalMinutes);
    
    // If seconds/minutes/hours are a single digit then we add a leading 0 to the value
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    }
    else {
        displaySeconds = seconds;
    }
    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    }
    else {
        displayMinutes = minutes;
    }
    if (hours < 10) {
        displayHours = "0" + hours.toString();
    }
    else {
        displayHours = hours;
    }
    // Display updated time values to user
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
    document.getElementById("totalMinutes").innerHTML = totalMinutes;
}

function startStop() {

    if (clockStatus === "stopped") {

        // Start stopwatch
        interval = window.setInterval(stopWatch, 10);
        document.getElementById("startStop").innerHTML = "Take a break!";
        clockStatus = "started";
    }

    else {

        // Stop stopwatch
        interval = window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Get back to work!";
        clockStatus = "stopped";
    }
}

function reset() {

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    totalMinutes = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start working!";
    document.getElementById('im1').src = 'fish_images/fish1.jpg';
}

window.addEventListener("load", function(){document.getElementById("startStop").addEventListener("click", startStop, false);}, false);
window.addEventListener("load", function(){document.getElementById("reset").addEventListener("click", reset, false);}, false);

function changeFishImage (totalMinutes) {
    var loc = '';
    if(totalMinutes<20){
        loc = 'fish_images/fish1.jpg';
    }
    else if(totalMinutes >= 20 && totalMinutes < 40){
        loc = 'fish_images/fish2.jpg';
    }
    else if(totalMinutes >= 40 && totalMinutes < 60){
        loc = 'fish_images/fish3.jpg';
    }
    else if(totalMinutes >= 60 && totalMinutes < 80){
        loc = 'fish_images/fish4.jpg';
    }
    else if(totalMinutes >= 80 && totalMinutes < 100){
        loc = 'fish_images/fish5.jpg';
    }
    else {
        loc = 'fish_images/fish6.jpg';
    }
    document.getElementById('im1').src = loc;
}