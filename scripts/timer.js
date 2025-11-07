import { totalFlips } from "./gameLogic.js";

let intervalId = 0
let totalTime = 0

function startTimer() {
    const time = document.querySelector(".state__time");
    const moves = document.querySelector(".state__moves");

    intervalId = setInterval(() => {
        totalTime++;
        moves.textContent = `Шаги: ${totalFlips} шагов`;
        time.textContent = `Время: ${totalTime} сек`;
        if (totalTime === 0) {
            stopTimer;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(intervalId);
}

export {stopTimer, startTimer, totalTime}