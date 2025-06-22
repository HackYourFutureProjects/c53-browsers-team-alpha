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
  questions: [
    {
    id: 1,
    text: 'Which of these is the largest country in Asia by area?',
    answers: {
      a: '✦  China',
      b: '✦  India',
      c: '✦  Russia',
      d: '✦  Kazakhstan',
    },
    correct: 'c',
    selected: null,
  },
    {
    id: 2,
    text: 'What country is home to the world’s highest mountain, Mount Everest?',
    answers: {
      a: '✦ China',
      b: '✦ Nepal',
      c: '✦ India',
      d: '✦ Bhutan',
    },
    correct: 'b',
    selected: null,
  },
    {
    id: 3,
    text: 'Which Asian capital city has the highest population?',
    answers: {
      a: '✦ Jakarta',
      b: '✦ Beijing',
      c: '✦ Tokyo',
      d: '✦ Delhi',
    },
    correct: 'c',
    selected: null,
  },
    {
    id: 4,
    text: 'Which Asian country has a flag that is not rectangular?',
    answers: {
      a: '✦ Bhutan',
      b: '✦ Maldives',
      c: '✦ Nepal',
      d: '✦ Sri Lanka',
    },
    correct: 'c',
    selected: null,
  },
    {
    id: 5,
    text: 'What desert in Asia is expanding at an alarming rate?',
    answers: {
      a: '✦ Gobi Desert',
      b: '✦ Thar Desert',
      c: '✦ Karakum Desert',
      d: '✦ Dasht-e Kavir',
    },
    correct: 'a',
    selected: null,
  },
    {
    id: 6,
    text: 'Which Asian country is made up of over 7,000 islands?',
    answers: {
      a: '✦ Japan',
      b: '✦ Philippines',
      c: '✦ Indonesia',
      d: '✦ Malaysia',
    },
    correct: 'b',
    selected: null,
  },
    {
    id: 7,
    text: 'Which landlocked country in Asia has a navy?',
    answers: {
      a: '✦ Afghanistan',
      b: '✦ Mongolia',
      c: '✦ Laos',
      d: '✦ Nepal',
    },
    correct: 'c',
    selected: null,
  },
    {
    id: 8,
    text: 'Which Asian country spans 11 time zones?',
    answers: {
      a: '✦ China',
      b: '✦ Kazakhstan',
      c: '✦ India',
      d: '✦ Russia',
    },
    correct: 'd',
    selected: null,
  },
    {
    id: 9,
    text: 'Which Asian capital city is sinking fastest due to rising sea levels and over-extraction of groundwater?',
    answers: {
      a: '✦ Bangkok',
      b: '✦ Jakarta',
      c: '✦ Manila',
      d: '✦ Dhaka',
    },
    correct: 'b',
    selected: null,
  },
    {
    id: 10,
    text: 'Which Asian country has a city where people live underground due to extreme weather?',
    answers: {
      a: '✦ Iran',
      b: '✦ Uzbekistan',
      c: '✦ China',
      d: '✦ Turkmenistan',
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
};
