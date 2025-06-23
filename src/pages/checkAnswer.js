import { quizData, quizState } from '../data.js';
import { saveQuizState } from './savestate.js';
import { initQuestionPage } from './questionPage.js';
//import { resetInMemoryState } from './resetMemory.js';
//import { initWelcomePage } from './welcomePage.js';
import { MoneyCounter } from '../MoneyCounter.js';
import { showEndScreen } from '../views/endGameView.js';

const correctAudio = new Audio('./public/assets/correct-answer-music.mp3');
const wrongAudio = new Audio('./public/assets/wrong-answer-music.mp3');
const selectAudio = new Audio('./public/assets/final-answer-music.mp3');
const timeoutAudio = new Audio('./public/assets/wrong-answer-music.mp3');
const backgroundMusic = new Audio('./public/assets/while-playing-music.mp3');

// Set audio volumes
correctAudio.volume = 0.7;
wrongAudio.volume = 0.7;
selectAudio.volume = 0.5;
timeoutAudio.volume = 0.7;
backgroundMusic.volume = 0.2;
backgroundMusic.loop = true;

const nextQuestion = () => {
  // Stop any playing background music
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0;

  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  if (quizData.currentQuestionIndex >= quizData.questions.length) {
setTimeout(showEndScreen, 2500)
    return;
  }
  quizState.currentQuestionIndex = quizData.currentQuestionIndex;
  saveQuizState(quizState);
  quizData.hasAnswered = false;
  initQuestionPage();
};

export const checkAnswers = (e, isSkipe = false) => {
  const keyCorrectAnswer = quizData.questions[quizData.currentQuestionIndex].correct;
  const correctAnswer = quizData.questions[quizData.currentQuestionIndex].answers[keyCorrectAnswer];
  const correctAnswerElement = document.getElementById(keyCorrectAnswer);

  try {
    selectAudio.currentTime = 0; 
    selectAudio.play();
  } catch (err) {
    console.error("Failed to play selection sound:", err);
  }

  if (isSkipe) {
    correctAnswerElement.classList.add('correct');
    quizState.answers[quizState.currentQuestionIndex] = `${keyCorrectAnswer} (skipped)`;
    quizState.budget=quizData.budget;
    saveQuizState(quizState);
     correctAnswerElement.classList.add('correct');
     setTimeout(showEndScreen,4000);
    
    // Play correct sound for skipped question
    try {
      correctAudio.currentTime = 0;
      correctAudio.play();
    } catch (err) {
      console.error("Failed to play correct sound:", err);
    }

    
    
    
  } else if (e.target.textContent.trim() === correctAnswer.trim()) {
    e.target.classList.add('correct');
    quizData.score++;
    quizState.answers[quizState.currentQuestionIndex] = keyCorrectAnswer;
    quizState.score=quizData.score;
    quizState.budget=quizData.budget;
    saveQuizState(quizState);
    quizData.budget=MoneyCounter[quizData.currentQuestionIndex].amount;
    const spans=document.querySelectorAll('li span');
    const element=Array.from(spans).find(el=>el.textContent.trim()===quizData.budget);
    if (element){
    const parent=element.parentElement;
    parent.classList.add('active');}
    
    // Play correct sound
    try {
      correctAudio.currentTime = 0;
      correctAudio.play();
    } catch (err) {
      console.error("Failed to play correct sound:", err);
    }
    
    setTimeout(nextQuestion, 3000);
    
  } else {
    correctAnswerElement.classList.add('correct');
    e.target.classList.add('wrong');
    quizState.answers[quizState.currentQuestionIndex] = keyCorrectAnswer;
    quizState.budget=quizData.budget;
    saveQuizState(quizState);
    
    // Play wrong sounds
    try {
      wrongAudio.currentTime = 0;
      wrongAudio.play();
    } catch (err) {
      console.error("Failed to play wrong sound:", err);
    }
    
    setTimeout(showEndScreen, 3000);
  }
};

export const playBackgroundMusic = () => {
  try {
    backgroundMusic.currentTime = 0;
    backgroundMusic.play().catch(err => {
      // Handle autoplay restrictions
      document.body.addEventListener('click', () => {
        backgroundMusic.play();
      }, { once: true });
    });
  } catch (err) {
    console.error("Failed to play background music:", err);
  }
};

// Export function to handle timeout sound
export const playTimeoutSound = () => {
  try {
    timeoutAudio.currentTime = 0;
    timeoutAudio.play();
  } catch (err) {
    console.error("Failed to play timeout sound:", err);
  }
};