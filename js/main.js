// Create an array of element IDs
const elementIds = ["timer", "start-button", "stop-button", "interval-input", "break-input", "rounds-input", "resume-button", "reset-button"];

// Use destructuring assignment to assign the elements to variables
const [timerElement, startButton, stopButton, intervalInput, breakInput, roundsInput, resumeButton, resetButton] = elementIds.map(id => document.getElementById(id));

let countdownInterval; // Variable to store the countdown interval
let count; // Variable to store the current count
let currentRound; // Variable to store the current round
let isInterval; // Variable to track whether it's an interval or a break

// Function to display a message
function displayMessage(message) {
  timerElement.textContent = message;
}

// Function to start the timer

// Function to stop the timer
function stopTimer() {
    clearInterval(countdownInterval); // Clear the countdown interval
  }

// Function to resume the timer

// Function to reset the timer

// Event listener for the start button click
startButton.addEventListener("click", startTimer);

// Event listener for the stop button click
stopButton.addEventListener("click", stopTimer);

// Event listener for the resume button click
resumeButton.addEventListener("click", resumeTimer);

// Event listener for the reset button click
resetButton.addEventListener("click", resetTimer);