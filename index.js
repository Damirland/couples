let board = document.querySelector(".board")
let start_button = document.querySelector(".board__button")
let input = document.querySelector(".board__input")

function createBoard(columns, count) {
    board.textContent = ""

    const template = document.querySelector('#gameTableTemplate')
    const gameTable = template.querySelector(".table")
    const restartBtn = gameTable.querySelector(".table__button");
    
    // gameTable.style = `
    //     grid-template-columns: repeat(${columns}, 1fr)
    //     grid-template-rows: repeat(${columns}, 1fr)
    // `

    gameTable.style.gridTemplateCollumns = `repeat(${columns}, 1fr)`
    gameTable.style.gridTemplateRows = `repeat(${columns}, 1fr)`
    
    for (let i = 0; i < count; i++) {
        gameTable.append(createCard())
    }

    board.append(gameTable)
    
    restartBtn.addEventListener("click", ()=>{
        location.reload
    })

    board.append(restartBtn)

}

function createCard() {
    let template = document.querySelector("#cardTemplate")
    let card = template.querySelector(".card")
    

}

start_button.addEventListener("click", ()=>{
    if (input.value % 2 === 0)  {
        input.value = input.value * input.value
    } else {
        input.value = 4
    }
})

createBoard()