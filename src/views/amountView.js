
import { quizData } from '../data.js';

export const createAmountElement = (id = 0, amount = "000,000") => {
    const element = document.createElement('li');

    const isActive = id === quizData.currentQuestionIndex + 1;

    element.className = isActive ? 'ListItem active' : 'ListItem';

    element.innerHTML = String.raw`
        <span id="${id}" class="ListItemNumber">${id}</span>
        <span class="moneyAmount">${amount}</span>
    `;

    return element;
};