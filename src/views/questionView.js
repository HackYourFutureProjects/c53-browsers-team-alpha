import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';

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

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
  `;

  return element;
};