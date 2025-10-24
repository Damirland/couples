let board = document.querySelector(".board")
let start_button = document.querySelector(".board__button")
let input = document.querySelector(".board__input")

function createBoard() {
    board.replaceChildren()
}

start_button.addEventListener("click", ()=>{
    console.log(input.value)
    if (input.value % 2 === 0)  {
        input.value = input.value * input.value
    } else {
        input.value = 4
    }
})