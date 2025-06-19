import { ANSWERS_LIST_ID, USER_INTERFACE_ID } from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  // Check if we've reached the end of questions
  if (quizData.currentQuestionIndex >= quizData.questions.length) {
    userInterface.innerHTML = '<h1>Quiz Completed</h1>';
    return;
  }

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  // Create answer buttons
  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);

    answerElement.addEventListener('click', () => {
      // Disable all answer buttons
      const allAnswers = document.querySelectorAll('.answer');
      allAnswers.forEach((answer) => {
        answer.style.pointerEvents = 'none';
      });

      // Mark if this answer was correct
      const isCorrect =
        key.toLowerCase() === currentQuestion.correct.toLowerCase();
      answerElement.classList.add(isCorrect ? 'correct' : 'wrong');

      // Highlight the correct answer if user was wrong
      if (!isCorrect) {
        const correctAnswer = document.querySelector(
          `[data-key="${currentQuestion.correct.toLowerCase()}"]`
        );
        correctAnswer.classList.add('correct');
      }

      // Move to next question after 1 second
      setTimeout(() => {
        quizData.currentQuestionIndex++;
        initQuestionPage();
      }, 3000);
    });
  }
};
