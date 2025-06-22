import {
  ANSWERS_LIST_ID,
  USER_INTERFACE_ID,
  SKIP_QUESTION_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { checkAnswers } from './checkAnswer.js';

let timeId;

export const initQuestionPage = () => {
     timeId=setTimeout(()=>{
      checkAnswers(null,true);
    },30000);
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);
  console.log(questionElement);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }
  const skipQuestionButton = document.getElementById(SKIP_QUESTION_BUTTON_ID);
  

  const answerButtons = answersListElement.querySelectorAll('.answer');
  answerButtons.forEach((answer) =>
    answer.addEventListener('click', (e) => {
      if (quizData.hasAnswered) return;
      quizData.hasAnswered = true;
       clearTimeout(timeId);
     
      handelAnswer(e);
    })
  );
  skipQuestionButton.addEventListener('click', (e) => {
    if (quizData.hasAnswered) return;
    quizData.hasAnswered = true;
    skipQuestionButton.disabled = true;
   
    checkAnswers(e, true);
  });

};

const handelAnswer = (e) => {
  
  checkAnswers(e);
};