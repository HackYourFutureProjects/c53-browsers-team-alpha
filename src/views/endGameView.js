import { USER_INTERFACE_ID } from '../constants.js';
import { initWelcomePage } from './welcomePage.js';
import { clearQuizState } from './loadState.js';
import { resetInMemoryState } from './resetMemory.js';

export const showEndScreen = (earnedAmount) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  const isWinner = earnedAmount === "1,000,000";
  
  userInterface.innerHTML = `
    <div class="end-screen">
      <div class="content">
        ${isWinner 
          ? `<h1 class="congratulations">Congratulations!</h1>
             <h2 class="winner-text">You won $${earnedAmount}!</h2>`
          : `<h2 class="result-text">You earned: $${earnedAmount}</h2>`
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