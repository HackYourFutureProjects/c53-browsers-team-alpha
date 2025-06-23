/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  score: 0,
  hasAnswered: false,
  earnedSteps: [],
  budget:0,
  event:'',
  username:'',
  questions: [
    {
    id: 1,
    text: '1. Which of these is the largest country in Asia by area?',
    answers: {
      a: '✦ A:  China',
      b: '✦ B:  India',
      c: '✦ C:  Russia',
      d: '✦ D:  Kazakhstan',
    },
    correct: 'c',
    selected: null,
  },
    {
    id: 2,
    text: '2. What country is home to the world’s highest mountain, Mount Everest?',
    answers: {
      a: '✦ A: China',
      b: '✦ B: Nepal',
      c: '✦ C: India',
      d: '✦ D: Bhutan',
    },
    correct: 'b',
    selected: null,
  },
    {
    id: 3,
    text: '3. Which Asian capital city has the highest population?',
    answers: {
      a: '✦ A: Jakarta',
      b: '✦ B: Beijing',
      c: '✦ C: Tokyo',
      d: '✦ D: Delhi',
    },
    correct: 'c',
    selected: null,
  },
    {
    id: 4,
    text: '4. Which Asian country has the most rainfall?',
    answers: {
      a: '✦ A: Bhutan',
      b: '✦ B: Maldives',
      c: '✦ C: Malaysia',
      d: '✦ D: Sri Lanka',
    },
    correct: 'c',
    selected: null,
  },
    {
    id: 5,
    text: '5. What desert in Asia is expanding at an alarming rate?',
    answers: {
      a: '✦ A: Gobi Desert',
      b: '✦ B: Thar Desert',
      c: '✦ C: Karakum Desert',
      d: '✦ D: Dasht-e Kavir',
    },
    correct: 'a',
    selected: null,
  },
    {
    id: 6,
    text: '6. Which Asian country is made up of over 7,000 islands?',
    answers: {
      a: '✦ A: Japan',
      b: '✦ B: Philippines',
      c: '✦ C: Indonesia',
      d: '✦ D: Malaysia',
    },
    correct: 'b',
    selected: null,
  },
    {
    id: 7,
    text: '7. Which landlocked country in Asia has a navy?',
    answers: {
      a: '✦ A: Afghanistan',
      b: '✦ B: Mongolia',
      c: '✦ C: Laos',
      d: '✦ D: Nepal',
    },
    correct: 'c',
    selected: null,
  },
    {
    id: 8,
    text: '8. Which Asian country spans 11 time zones?',
    answers: {
      a: '✦ A: China',
      b: '✦ B: Kazakhstan',
      c: '✦ C: India',
      d: '✦ D: Russia',
    },
    correct: 'd',
    selected: null,
  },
    {
    id: 9,
    text: '9. Which Asian capital is sinking fastest due to climate change?',
    answers: {
      a: '✦ A: Bangkok',
      b: '✦ B: Jakarta',
      c: '✦ C: Manila',
      d: '✦ D: Dhaka',
    },
    correct: 'b',
    selected: null,
  },
    {
    id: 10,
    text: '10. Which Asian country has an underground city due to extreme weather?',
    answers: {
      a: '✦ A: Iran',
      b: '✦ B: Uzbekistan',
      c: '✦ C: China',
      d: '✦ D: Turkmenistan',
    },
    correct: 'd',
    selected: null,
  },
],
};
export const quizState = {
  currentQuestionIndex: 0,
  score: 0,
  answers: {},
  budget:0,
  username:'',
};
