import { USER_INTERFACE_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';
//import { START_QUIZ_BUTTON_ID } from '../constants.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement((userName) => {
    console.log('Username received:', userName);

    initQuestionPage(userName);
  });

  userInterface.appendChild(welcomeElement);
  
};