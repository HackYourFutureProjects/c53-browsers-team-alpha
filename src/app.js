import { quizData, quizState } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { loadQuizState } from './pages/loadState.js';
import { initQuestionPage } from './pages/questionPage.js';
import { clearQuizState } from './pages/loadState.js';
const loadApp = () => {
  const savedState = loadQuizState();

  quizState.currentQuestionIndex = savedState.currentQuestionIndex;
  quizState.answers = savedState.answers;
  quizState.score = savedState.score;
  quizData.currentQuestionIndex = quizState.currentQuestionIndex;
  clearQuizState();

  const alreadyStarted = Object.keys(quizState.answers).length > 0;
  if (alreadyStarted) {
    if (quizState.answers.hasOwnProperty(quizState.currentQuestionIndex)) {
      quizData.hasAnswered = true;
    } else {
      quizData.hasAnswered = false;
    }

    initQuestionPage();
  } else {
    initWelcomePage();
  }
};

window.addEventListener('load', loadApp, { once: true });