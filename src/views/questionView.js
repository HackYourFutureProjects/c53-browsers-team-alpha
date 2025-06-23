import {
  ANSWERS_LIST_ID,
  SKIP_QUESTION_BUTTON_ID,
} from '../constants.js';

import { MoneyCounter } from '../MoneyCounter.js';

/**
 * Create a full question element
 * @param {string} question - The question text to display
 * @param {number} timeLimit - Countdown timer in seconds (default: 30)
 * @returns {Element}
 */
export const createQuestionElement = (question, timeLimit = 30) => {
    const audio = document.getElementById('while-playing-music');

  const MoneyCounterData = [...MoneyCounter];
  const element = document.createElement('div');
  element.classList.add('app');
  // Build money counter HTML
  const MoneyCounterDataHTML = `
              <button id="${SKIP_QUESTION_BUTTON_ID}" class="skip-button">
              <img src="./public/assets/skipped-icon.svg" alt="skip" class="skip-icon">
              </button>
               <button class="help">
              <img src="./public/assets/calling-icon.svg" alt="call" class="icon">
              <img src="./public/assets/audience-icon.svg" alt="call" class="icon">
              </button>

    <ul class="moneyList">

    </ul>
  `;

  element.innerHTML = `
      <div class="main">
<video class="background-video" autoplay muted loop>
<source src="./public/assets/gameplay-video.mp4" type="video/mp4"></video>
      <div class="upper-section">
        <div class="timer">${timeLimit}</div>
      </div>
      <div class="bottom-section">
        <div class="container">
          <div class="question">${question}</div>
          <div id="${ANSWERS_LIST_ID}" class="answers"></div>
        </div>
      </div>
      </div>
  <div class="money-counter">${MoneyCounterDataHTML}</div>
  <audio id="while-playing-music" src="./public/assets/while-playing-music.mp3" preload="auto" loop></audio>
  `;

// Play music after DOM is ready
setTimeout(() => {
    const audio = document.getElementById('while-playing-music');
    if (audio) {
      audio.play().catch(e => console.log("Audio play failed:", e));
    }
  }, 100);

  
  // Timer logic
  const timerElement = element.querySelector('.timer');
  let timeLeft = timeLimit;

  const timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 20) {
      timerElement.classList.add('yellow-warning');
    } else {
      timerElement.classList.remove('yellow-warning');
    }

    if (timeLeft <= 10) {
      timerElement.classList.add('red-warning');
    } else {
      timerElement.classList.remove('red-warning');
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerElement.textContent = "Time's up!";
      timerElement.classList.add('warning');
    }
  }, 1000);

  // Cleanup logic
  element.cleanup = () => clearInterval(timerInterval);

  return element;
};