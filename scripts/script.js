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
function startTimer() {
  const intervalDuration = parseInt(intervalInput.value); // Get interval duration from input
  const breakDuration = parseInt(breakInput.value); // Get break duration from input
  const totalRounds = parseInt(roundsInput.value); // Get total rounds from input

  // Display "GET READY" message
  displayMessage("GET READY");

  // Wait for 1 second before starting the countdown
  setTimeout(() => {
    currentRound = 1; // Initialize current round
    count = 5; // Starting count
    isInterval = true; // Set the initial phase as interval

    // Countdown interval
    countdownInterval = setInterval(() => {
      count--; // Decrease count by 1

      if (count >= 0) {
        // Update the timer element with the new count
        displayMessage(count);
      } else {
        // Countdown finished for the current round
        if (currentRound <= totalRounds) {
          if (isInterval) {
            // Display interval message
            displayMessage(`Interval ${currentRound}`);

            // Reset the count for the interval duration
            count = intervalDuration;
            isInterval = false; // Set the phase as break
          } else {
            // Display break message
            displayMessage(`Break ${currentRound}`);

            // Reset the count for the break duration
            count = breakDuration;
            isInterval = true; // Set the phase as interval
            currentRound++; // Increment the current round
          }
        }

        // Countdown complete for all rounds
        if (currentRound > totalRounds) {
          displayMessage("TIME OUT!");
          stopTimer(); // Stop the timer
        }
      }
    }, 1000); // Update every 1 second
  }, 1000); // Wait for 1 second
}

// Function to stop the timer
function stopTimer() {
  clearInterval(countdownInterval); // Clear the countdown interval
}

// Function to resume the timer
function resumeTimer() {
  // Resume the countdown only if the timer was previously stopped or paused
  if (count > 0) {
    countdownInterval = setInterval(() => {
      count--; // Decrease count by 1

      if (count >= 0) {
        // Update the timer element with the new count
        displayMessage(count);
      } else {
        if (isInterval) {
          // Display interval message
          displayMessage(`Interval ${currentRound}`);

          // Reset the count for the interval duration
          count = parseInt(intervalInput.value);
          isInterval = false; // Set the phase as break
        } else {
          // Display break message
          displayMessage(`Break ${currentRound}`);

          // Reset the count for the break duration
          count = parseInt(breakInput.value);
          isInterval = true; // Set the phase as interval
          currentRound++; // Increment the current round
        }

        // Countdown complete for all rounds
        if (currentRound > parseInt(roundsInput.value)) {
          displayMessage("TIME OUT!");
          stopTimer(); // Stop the timer
        }
      }
    }, 1000); // Update every 1 second
  }
}

// Function to reset the timer
function resetTimer() {
  clearInterval(countdownInterval); // Clear the countdown interval
  displayMessage("0"); // Reset to "GET READY" message
  intervalInput.value = 10; // Clear interval input value
  breakInput.value = 0; // Clear break input value
  roundsInput.value = 1; // Clear rounds input value
  count = undefined; // Reset the count to its initial value
  currentRound = undefined; // Reset the current round to its initial value
  isInterval = undefined; // Reset the phase to its initial value
}

// Event listener for the start button click
startButton.addEventListener("click", startTimer);

// Event listener for the stop button click
stopButton.addEventListener("click", stopTimer);

// Event listener for the resume button click
resumeButton.addEventListener("click", resumeTimer);

// Event listener for the reset button click
resetButton.addEventListener("click", resetTimer);