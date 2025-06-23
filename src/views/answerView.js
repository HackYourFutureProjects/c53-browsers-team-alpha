/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('div');
  element.classList.add('answer');
  element.id = `${key}`;
  element.innerHTML = `${answerText}`;
  return element;
};