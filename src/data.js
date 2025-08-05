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
      text: 'What does `typeof` do?',
      answers: {
        a: 'changes the type of a primitive value',
        b: 'returns a string describing the type of a value',
        c: 'determines if a value is primitive',
        d: 'can tell the difference between arrays and objects',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
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
