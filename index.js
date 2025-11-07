import { createBoard } from "./scripts/createBoard.js"

let board = document.querySelector(".board")
let start_button = document.querySelector(".board__button")
let input = document.querySelector(".board__input")


let isGameOver = false



start_button.addEventListener("click", (event) => {
    event.preventDefault()
    const input = document.querySelector('.board__input');

    let columns = input.value;
    let count;

    if (columns >= 2 && columns <= 6 && columns % 2 == 0) {
        count = columns * columns;
    } else {
        alert("Нужно написать четное число в указанном диапазоне.");
        return;
    }

    createBoard(count, columns);
    })

export {isGameOver}