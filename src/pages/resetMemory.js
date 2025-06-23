import { quizData, quizState } from '../data.js';
export const resetInMemoryState = () => {
  quizData.currentQuestionIndex = 0;
  quizState.currentQuestionIndex = 0;
  quizState.answers={};
  quizData.budget=0;
  quizData.event='';
  quizData.username='';
  quizData.hasAnswered=false;
  quizData.score=0;

};
