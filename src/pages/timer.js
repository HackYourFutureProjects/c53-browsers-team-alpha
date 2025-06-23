  export const timer=()=>{
  setTimeout(() => {
    const audio = document.getElementById('while-playing-music');
    if (audio) {
      audio.play().catch(e => console.log("Audio play failed:", e));
    }
  }, 100);

  
  // Timer logic
  const timerElement = element.querySelector('.timer');
  let timeLeft = timeLimit;

  const timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 20) {
      timerElement.classList.add('yellow-warning');
    } else {
      timerElement.classList.remove('yellow-warning');
    }

        if (timeLeft <= 10) {
      timerElement.classList.add('red-warning');
    } else {
      timerElement.classList.remove('red-warning');
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerElement.textContent = "Game Over!";
      timerElement.classList.add('warning');
    }
  }, 1000);

};