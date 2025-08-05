import { USER_INTERFACE_ID } from '../constants.js';
import { initWelcomePage } from '../pages/welcomePage.js';
import {clearQuizState}  from '../pages/loadState.js'
import { resetInMemoryState } from '../pages/resetMemory.js';
import { quizData } from '../data.js';

export const showEndScreen = () => {
const userInterface = document.getElementById(USER_INTERFACE_ID);
const isWinner = quizData.budget === "1,000,000";

userInterface.innerHTML = `
  <div class="end-screen ${isWinner ? 'winner-bg' : 'loser-bg'}">
    <div class="content">
      <h2>${quizData.username}</h2>
      ${isWinner 
        ? `<h1 class="congratulations">Congratulations!</h1>
           <h2 class="winner-text">You won $${quizData.budget}!</h2>`
        : `<h2 class="result-text">You earned: $${quizData.budget || '000,000'}.</h2>
           <h2>You have answered: ${quizData.score} questions correctly.</h2>`
      }
      <button class="try-again-btn">${isWinner ? 'Play Again' : 'Try Again'}</button>
    </div>
  </div>
`;

  const tryAgainBtn = document.querySelector('.try-again-btn');
  tryAgainBtn.addEventListener('click', () => {
    clearQuizState();
    resetInMemoryState();
    initWelcomePage();
  });
};