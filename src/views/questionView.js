import { ANSWERS_LIST_ID } from '../constants.js';
/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question, timeLimit = 30) => {
  const element = document.createElement('div');
  element.classList.add('app');
  element.innerHTML = `
  <div class="main">
    <video class="background-video" autoplay muted loop>
      <source src="./public/assets/gameplay-video.mp4" type="video/mp4">
    </video>
    <div class="content">
      <div class="top">
        <div class="timer">${timeLimit}</div>
      </div>
      <div class="bottom">
        <div class="trivia">
          <h1 class="question">${question}</h1>
          <div id="${ANSWERS_LIST_ID}" class="answers"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="pyramid"></div>
  `;

  // Start timer immediately
  const timerElement = element.querySelector('.timer');
  let timeLeft = timeLimit;

  const timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;

    // Add/remove warning class based on time left
    if (timeLeft <= 5) {
      timerElement.classList.add('warning'); // No dot here!
    } else {
      timerElement.classList.remove('warning'); // Remove if time increases (unlikely but safe)
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerElement.textContent = "Time's up!";
      timerElement.classList.add('warning'); // Keep warning style when time expires
    }
  }, 1000);

  // Clean up timer when element is removed
  element.cleanup = () => clearInterval(timerInterval);

  return element;
};
